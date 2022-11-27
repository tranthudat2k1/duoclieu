const { use } = require('./reference.router')

module.exports = api => api
  .use('/authentication', require('./authentication.router'))
  .use('/description', require('./description.router'))
  .use('/introduction', require('./introduction.router'))
  .use('/microsurgery', require('./microsurgery.router'))
  .use('/distribution', require('./distribution.router'))
  .use('/uses', require('./uses.router'))
  .use('/reference', require('./reference.router'))
  .use('/', require('./home.router'))