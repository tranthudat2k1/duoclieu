const description = require('../controllers/description.controler')

module.exports= require('express').Router()
  .get("/mo-ta", description.get)