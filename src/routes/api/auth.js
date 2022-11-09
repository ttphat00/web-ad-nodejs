const express = require('express');
const router = express.Router();

const authController = require('../../app/http/controllers/AuthController');

router.post('/register', authController.register);
router.post('/customer-login', authController.customerLogin);
router.post('/admin-login', authController.adminLogin);

module.exports = router;
