const data = require('../data');

module.exports.get = (req, res, next) => {
    res.render("component/distribution.ejs", { data: data.distribution });
}