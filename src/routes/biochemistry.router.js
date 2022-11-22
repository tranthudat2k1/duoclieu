const biochemistry = require('../controllers/biochemistry.controller');

module.exports = require('express').Router()
    .get("/", biochemistry.get);