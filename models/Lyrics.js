const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const LyricsSchema = new Schema(
  {
    title: String,
    author: { type: ObjectId, ref: 'User' },
    band: { type: ObjectId, ref: 'Band' },
    project: { type: ObjectId, ref: 'Project' },
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lyrics', LyricsSchema);
