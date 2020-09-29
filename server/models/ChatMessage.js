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

ChatMessageSchema.static(
  'publicFields',
  () => '_id content author band createdAt'
);

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
