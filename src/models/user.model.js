const UserSchema = require('../schemas/user.schema')
const bcrypt = require('bcryptjs')

module.exports = class User {
  id
  #avatar
  #name
  #phone
  #email
  #username
  #password
  #role

  constructor(id, avatar, name, email, phone, username, password, role = "staff") {
    this.id = id
    this.#avatar = avatar
    this.#name = name
    this.#email = email
    this.#phone = phone
    this.#username = username
    this.#password = password
    this.#role = role
  }

  create = () => new Promise((resolve, reject) => {
    !this.#password && reject({ status: 400, message: 'Password is required!' })
    const user = UserSchema()
    user.name = this.#name
    user.avatar = this.#avatar
    user.phone = this.#phone
    user.email = this.#email
    user.username = this.#username
    user.password = bcrypt.hashSync(this.#password, bcrypt.genSaltSync(10))
    user.role = this.#role
    user
      .save()
      .then(user => resolve(user))
      .catch(err => reject(err))
  })
}