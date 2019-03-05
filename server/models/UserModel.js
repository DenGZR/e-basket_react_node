import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
  createdData: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  }
});

export default mongoose.model('User', userSchema, 'users');
