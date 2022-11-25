const home = require('../controllers/home.controller')

module.exports= require('express').Router()
  .get("/", home.get)
  .get("/hoa-thuc-vat-va-hoat-tinh-sinh-hoc", home.getHoaSinhHoc)