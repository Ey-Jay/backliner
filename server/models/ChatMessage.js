const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    band: { type: Schema.Types.ObjectId, ref: 'Band' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
