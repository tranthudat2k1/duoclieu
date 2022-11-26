module.exports.get = (req, res, next) => {
    res.render("home/index.ejs")
  }

  module.exports.getHoaSinhHoc = (req, res, next) => {
    const data = require("../data")
    res.render("hoa-sinh-hoc/index.ejs", {result : data.biochemistry})
  }

  module.exports.test = (req, res, next) => {
    res.render("hoa-sinh-hoc/test.ejs")
  }

  module.exports.getTaiLieuThamKhao = (req, res, next) => {
    const data = require("../data")
    res.render("tai-lieu-tham-khao/index.ejs", {result : data.taiLieuThamKhao})
  }