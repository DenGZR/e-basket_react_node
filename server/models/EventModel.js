import mongoose, { Schema } from 'mongoose';

const eventSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  session_id: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  protocol: {
    type: String
  },
  hostname: {
    type: String
  },
  path: {
    type: String
  },
  query: {
    type: Schema.Types.Mixed,
    default: {}
  },
  referrer_url: {
    type: String
  },
  utm: {
    type: Schema.Types.Mixed,
    default: {}
  },
  parameters: {
    type: Schema.Types.Mixed,
    default: {}
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Event', eventSchema, 'events');
