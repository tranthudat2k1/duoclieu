module.exports = api => api
  .use('/authentication', require('./authentication.router'))
  .use('/description', require('./description.router'))
  .use('/introduction',require('./introduction.router'))
  .use('/home',require('./home.router'))