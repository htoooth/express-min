const express = require('../');

const router = express.Router();

router.use('/cart', function(ctx, req, res, next) {
  console.log('cart');
})

router.use('/cart/:id', function(ctx, req, res) {
  console.log(req);
})

module.exports = router;
