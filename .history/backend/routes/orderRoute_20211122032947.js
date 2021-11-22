const express = require('express');
const { newOrder } = require('../controllers/orderController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, newOrder);

module.exports = router;