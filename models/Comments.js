const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    parent_type: {
      type: String,
      enum: ['Audio', 'Video', 'File', 'Lyrics', 'Project'],
    },
    parent_id: {
      type: Schema.Types.ObjectId,
      refPath: 'parent_type',
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
