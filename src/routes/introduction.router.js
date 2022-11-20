const introduction = require('../controllers/introduction.controller')

module.exports= require('express').Router()
  .get('/', introduction.get)