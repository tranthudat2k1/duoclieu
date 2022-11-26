const microsurgery = require('../controllers/microsurgery.controller');

module.exports = require('express').Router()
    .get('/', microsurgery.get);