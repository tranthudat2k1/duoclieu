const home = require('../controllers/home.controller')

module.exports= require('express').Router()
  .get("/", home.get)