const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logout, forgotPassword, resetPassword} = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/logout').get(logout);

module.exports = router;