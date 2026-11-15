const Order = require('../Model/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const { user, items, totalAmount, deliveryAddress } = req.body;
    const newOrder = await Order.create({ user, items, totalAmount, deliveryAddress });
    res.status(201).json({ message: 'Order created', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).json({ message: 'Status updated', order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};