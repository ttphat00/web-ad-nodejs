const express = require('express');
const cityController = require('../../app/http/controllers/CityController');
const router = express.Router();

// const authMiddleware = require('../../app/http/middleware/auth.middlewares');

// const isAuth = authMiddleware.isAuth;

router.post('/', cityController.store);
router.delete('/:id', cityController.destroy);
router.put('/:id', cityController.update);

//get categories by id_user
// router.get('/my-categories', isAuth, cityController.showByIdUser);

router.get('/:id', cityController.show);
router.get('/', cityController.index);

module.exports = router;
