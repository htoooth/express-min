const express = require('../');

const subApp = express();

subApp.use('/passport', function(ctx, req, res, next) {
  req.value = 'ok';
  console.log('passport');
  next();
}, function(ctx, req, res) {
  console.log(req.value);
});

module.exports = subApp;