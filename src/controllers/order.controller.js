import Order from '../models/order.model.js';

export const createOrder = async (req, res) => {
  const { orderItems, shippingAddress, totalPrice } = req.body;

  const order = await Order.create({
    user: req.user.id,
    orderItems,
    shippingAddress,
    totalPrice,
  });

  res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('orderItems.product');
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json(orders);
};
