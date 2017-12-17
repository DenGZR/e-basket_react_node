import mongoose, { Schema } from 'mongoose';

const sessionSchema = new Schema({
  createdData: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Session', sessionSchema, 'sessions');
