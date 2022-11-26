const distribution = require('../controllers/distribution.controller');

module.exports = require('express').Router()
    .get('/', distribution.get);