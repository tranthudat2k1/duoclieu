const data = require('../data');
module.exports.get = (req, res, next) => {
    res.render('component/microsurgery.ejs', {data:data.microsurgery});
}