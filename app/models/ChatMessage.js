import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const ChatMessageSchema = new mongoose.Schema(
  {
    content: String,
    author: { type: ObjectId, ref: 'User' },
    band: { type: ObjectId, ref: 'Band' },
    active: Boolean,
  },
  { timestamps: true }
);

ChatMessageSchema.static(
  'publicFields',
  () => '_id content author band createdAt'
);

export default mongoose.models.ChatMessage ||
  mongoose.model('ChatMessage', ChatMessageSchema);
