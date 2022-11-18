const express = require('express');
const adController = require('../../app/http/controllers/AdController');
const router = express.Router();

const fileUploader = require('../../config/cloudinary.config');

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', fileUploader.array('file'), isAuth, adController.store);

// router.delete('/delete-my-products', isAuth, adController.destroyByIdUser);
router.delete('/:id', adController.destroy);

router.put(
    '/add-images/:id',
    fileUploader.array('file'),
    adController.addImages,
);
router.put('/extend/:id', adController.extend);
router.put('/:id', fileUploader.array('file'), adController.update);

//get products by id_category
// router.get('/by-category/:id', adController.showByIdCategory);

//get my products
// router.get('/my-products', isAuth, adController.showByIdUser);

router.get('/title/:title', adController.showByTitle);
router.get('/:id', adController.show);
router.get('/', adController.index);

module.exports = router;
