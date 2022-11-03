module.exports = api => api
  .use('/authentication', require('./authentication.router'))