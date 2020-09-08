const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const AudioSchema = new Schema(
  {
    title: String,
    author: { type: ObjectId, ref: 'User' },
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Audio', AudioSchema);
