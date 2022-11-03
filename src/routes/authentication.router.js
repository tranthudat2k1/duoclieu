const authController = require('../controllers/authentication.controller')

module.exports= require('express').Router()
  .get("/login", authController.get)