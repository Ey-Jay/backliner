import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const CommentSchema = new mongoose.Schema(
  {
    parent_type: {
      type: String,
      enum: ['Audio', 'Video', 'File', 'Lyrics', 'Project'],
    },
    parent_id: {
      type: ObjectId,
      refPath: 'parent_type',
      required: true,
    },
    author: { type: ObjectId, ref: 'User', required: true },
    content: String,
    active: Boolean,
  },
  { timestamps: true }
);

CommentSchema.static(
  'publicFields',
  () => '_id parent_type parent_id author content createdAt'
);

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema);
