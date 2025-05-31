import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './src/config/db.js'

import authRoutes from './src/routes/auth.route.js';
import userRoutes from './src/routes/user.route.js';
import productRoutes from './src/routes/product.route.js';
import ordersRoutes from './src/routes/order.route.js';
import inventoryRoutes from './src/routes/inventory.route.js';

import { notFound, errorHandler } from './src/middlewares/error.middleware.js';

const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send(`API is running..`)
})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/inventory', inventoryRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server running on port number ${PORT}`);
});