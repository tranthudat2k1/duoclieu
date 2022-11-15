module.exports = api => api
  .use('/authentication', require('./authentication.router'))
  .use('/description', require('./description.router'))