import mongoose, { mongo } from 'mongoose';

const staffSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    role: { type: String, enum: ['admin', 'manager', 'worker'], default: 'worker' },
    phone: String,
    salary: Number,
  },
  { timestamps: true }
);

export default mongoose.model('Staff', staffSchema);