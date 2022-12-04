const express = require('express');
const savedAdController = require('../../app/http/controllers/SavedAdController');
const router = express.Router();

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', isAuth, savedAdController.store);

router.delete('/:id', isAuth, savedAdController.destroy);

router.get('/:id', isAuth, savedAdController.show);
router.get('/', savedAdController.index);

module.exports = router;
