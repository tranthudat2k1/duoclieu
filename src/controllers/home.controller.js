module.exports.get = (req, res, next) => {
    res.render("home/index.ejs")
  }

  module.exports.getHoaSinhHoc = (req, res, next) => {
    const data = require("../data")
    res.render("hoa-sinh-hoc/index.ejs", {result : data.biochemistry})
  }
