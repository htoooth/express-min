
function dispatch(app) {
  app.use('/app', require('./subApp'));
  app.use('/app2', require('./router'));
}

module.exports = dispatch;