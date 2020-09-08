const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a project name.'],
      maxlength: [40, 'Name limited to 40 characters'],
    },
    theme: String,
    band: {
      type: Schema.Types.ObjectId,
      ref: 'Band',
      required: true,
    },
    audios: [{ type: Schema.Types.ObjectId, ref: 'Audio' }],
    videos: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    lyrics: [{ type: Schema.Types.ObjectId, ref: 'Lyrics' }],
    files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
