const description = require('../controllers/description.controler')

module.exports= require('express').Router()
  .get("/", description.get)