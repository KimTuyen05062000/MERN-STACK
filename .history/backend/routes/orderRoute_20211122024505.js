const express = require('express');
const { newOrder } = require('../controllers/orderController');
const router = express.Route();

router.route('/order/new').post(isAuthenticatedUser, newOrder);

module.exports = router;