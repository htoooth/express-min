const wayfarer = require('wayfarer');
const connect2 = require('connect2');

var proto = {};

proto._mount = {};

proto.use = function(route, ...fns)  {
  if (!fns[0]) {
    throw new TypeError('must be a middleware');
  }

  if (fns[0]._wayfarer) {
    this.on(route, fns[0]);
    return;
  }

  let connect = this._mount[route]
    ? this._mount[route]
    : this._mount[route] = connect2();

  fns.forEach(fn => {
    connect.use(fn);
  })

  this.on(route, function(params, ctx, req, res) {
    req.body = params;
    connect(ctx, req, res);
  })

  return this;
}

function createApp(opts)  {
  let app = wayfarer(opts);
  Object.assign(app, proto);

  return app;
}

module.exports = createApp;
module.exports.Router = createApp;
