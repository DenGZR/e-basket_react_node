import mongoose, { Schema } from 'mongoose';

export const userSchema = new Schema({
  'user-agent': {
    type: String,
    default: null
  },
  'accept-language': {
    type: String,
    default: null
  },
  createdData: {
    type: Date,
    default: Date.now
  },
  lastEventData: {
    type: Date,
    default: Date.now
  },
  lastVisitData: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema, 'users');
