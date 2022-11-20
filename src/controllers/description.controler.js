module.exports.get = (req, res, next) => {
  const data = require("../data")
  res.render("component/description.ejs", { data: data.description })
}