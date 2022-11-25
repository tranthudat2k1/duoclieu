module.exports.get = (req, res, next) => {
    const data = require('../data');
    res.render('component/introduction.ejs', { data: data.introduction });
}
module.exports.getIntroPage = (req, res, next) => {
    const data = require('../data');
    res.render('component/introductionPage.ejs', { data: data.introCommon });
}