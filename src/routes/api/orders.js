const express = require('express');
const orderController = require('../../app/http/controllers/OrderController');
const router = express.Router();

const authMiddleware = require('../../app/http/middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/admin-order', orderController.storeAdminOrder);
router.post('/', isAuth, orderController.store);

router.put('/:id', orderController.update);

router.delete('/:id', orderController.destroy);

//get orders by id_customer
// router.get('/my-orders', isAuth, orderController.showByIdCustomer);

//get orders by id_employee
// router.get('/confirmed-orders', isAuth, orderController.showByIdEmployee);

//get orders by status
// router.get('/by-status', orderController.showByStatus);

//get an order by id
router.get('/:id', orderController.show);

//get all orders
router.get('/', orderController.index);

module.exports = router;
