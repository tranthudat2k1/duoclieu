module.exports.get = (req, res, next) => {
    const data = require('../data');
    res.render('component/introduction.ejs', { data: data.introduction });
}