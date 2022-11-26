const home = require('../controllers/home.controller')

module.exports= require('express').Router()
  .get("/", home.get)
  .get("/test", home.test)
  .get("/hoa-thuc-vat-va-hoat-tinh-sinh-hoc", home.getHoaSinhHoc)
  .get("/tai-lieu-tham-khao", home.getTaiLieuThamKhao)