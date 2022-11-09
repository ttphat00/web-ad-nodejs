const express = require('express');
const customerController = require('../../app/http/controllers/CustomerController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

//get user profile by token
router.get('/profile', isAuth, async (req, res) => {
    res.json(req.customer);
});

router.put('/update-my-info', isAuth, customerController.updateInfo);
router.put(
    '/update-my-avatar',
    fileUploader.single('file'),
    isAuth,
    customerController.updateAvatar,
);
router.put('/delete-my-avatar', isAuth, customerController.deleteAvatar);
// router.put('/reset-password/:id', customerController.updatePassword);
// router.put('/:id', customerController.updatePermission);

router.delete('/:id', customerController.destroy);

router.get('/:id', customerController.show);
router.get('/', customerController.index);

module.exports = router;
