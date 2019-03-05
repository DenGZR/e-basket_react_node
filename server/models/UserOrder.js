import mongoose, { Schema } from 'mongoose';

export const orderSchema = new Schema({
  createdData: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: {
    type: Array 
  }
});

export default mongoose.model('Order', orderSchema, 'order');