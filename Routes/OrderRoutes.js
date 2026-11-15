const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders, updateOrderStatus } = require('../Controller/OrderController');

router.post('/create', createOrder);
router.get('/user/:userId', getUserOrders);
router.put('/status/:id', updateOrderStatus);

module.exports = router;