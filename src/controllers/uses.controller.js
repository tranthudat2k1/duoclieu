const data = require('../data');
module.exports.get = (req, res, next) => {
    res.render('component/uses.ejs', { data: data.uses });
}