const reference = require('../controllers/reference.controller')

module.exports = require('express').Router()
.get("/", reference.get);