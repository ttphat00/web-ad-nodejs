const express = require('express');
const categoryController = require('../../app/http/controllers/CategoryController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');
// const authMiddleware = require('../../app/http/middleware/auth.middlewares');

// const isAuth = authMiddleware.isAuth;

router.post('/', fileUploader.single('file'), categoryController.store);
router.delete('/:id', categoryController.destroy);
router.put('/:id', fileUploader.single('file'), categoryController.update);

//get categories by id_user
// router.get('/my-categories', isAuth, categoryController.showByIdUser);

router.get('/title/:title', categoryController.showByTitle);
router.get('/:id', categoryController.show);
router.get('/', categoryController.index);

module.exports = router;
