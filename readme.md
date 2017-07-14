# express-min

A module like express but more general using. It combines [connect2](https://www.npmjs.com/package/connect2) with [wayfarer](https://www.npmjs.com/package/wayfarer).

## how to use

you can see [example](./example);

```js

const express = require('express-min');

const app = express();

const subApp = express();

subApp.use('/passport', function(ctx, req, res, next) {
  console.log('passport')
  next();
})

subApp.use('/passport/:id', function(ctx, req, res, next) {
  console.log(req.body);
});

const router = express.Router();

router.use('/cart', function(ctx, req, res) {
  console.log('cart');
})

try {
  app.use('/app', subApp);
  app.use('/app2', router);
} catch(e) {
  console.log(e);
}

const ROUTE_MAP = {
  1: '/app/passport',
  2: '/app2/cart'
}

function main() {
  let ctx = {};
  let req = {};
  let res = {};

  try {
    app(ROUTE_MAP[1], ctx, req, res);
  } catch (e) {
    console.log(e);
  }
}

main();

```

## api

see doc from [connect2](https://www.npmjs.com/package/connect2) with [wayfarer](https://www.npmjs.com/package/wayfarer).

### use(route, ...fns)

Add route and callback to a app.




