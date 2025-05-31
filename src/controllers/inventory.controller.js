import Product from '../models/product.model.js';

export const getLowStockProducts = async (req, res) => {
  const lowStock = await Product.find({ stock: { $lt: 10 } });
  res.json(lowStock);
};

export const updateStock = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  const product = await Product.findByIdAndUpdate(id, { stock }, { new: true });
  res.json(product);
};
