const express = require('../');

const app = express();

const CMD_MAP = {
  1: '/app/passport',
  2: '/app2/cart',
  3: '/app2/cart/1',
  4: '/app2/c',
  default: '404'
}

try {
  require('./dispatch')(app);
} catch(e) {
  console.log(e);
}

function handle (id, ctx, req, res) {
  app(id, ctx, req, res);
}

function main(fn) {
  let ctx = {};
  let req = {};
  let res = {};
  var cmdId = 4;
  fn(CMD_MAP[cmdId], ctx, req, res);
}


main(handle)


