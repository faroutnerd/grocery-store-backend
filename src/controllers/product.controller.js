// controllers/productController.js

import Product from '../models/product.model.js';

export const getAllProducts = async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, price, stock, category, description, image } = req.body;
  const product = await Product.create({ name, price, stock, category, description, image });
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product removed' });
};
