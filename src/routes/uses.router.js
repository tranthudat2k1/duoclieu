const uses = require("../controllers/uses.controller");

module.exports = require('express').Router()
    .get('/', uses.get);