module.exports = api => api
  .use('/authentication', require('./authentication.router'))
  .use('/description', require('./description.router'))
  .use('/introduction',require('./introduction.router'))
  .use('/biochemistry', require('./biochemistry.router'))
  .use('/home',require('./home.router'))