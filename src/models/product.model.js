import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    image: String,
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);
 export default mongoose.model('Product', productSchema);
