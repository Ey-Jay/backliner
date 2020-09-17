const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: [60, 'Name limited to 60 characters'],
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    band: { type: Schema.Types.ObjectId, ref: 'Band' },
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    url: String,
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Video', VideoSchema);
