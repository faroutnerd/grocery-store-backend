import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        price: Number,
      },
    ],
    shippingAddress: {
      pin: String,
      city: String,
      state: String,
      street: String,
    },
    totalPrice: Number,
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);