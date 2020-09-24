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
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    band: {
      type: Schema.Types.ObjectId,
      ref: 'Band',
      required: true,
    },
    active: Boolean,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

ProjectSchema.virtual('audios', {
  ref: 'Audio',
  localField: '_id',
  foreignField: 'project',
  justOne: false,
});

ProjectSchema.virtual('videos', {
  ref: 'Video',
  localField: '_id',
  foreignField: 'project',
  justOne: false,
});

ProjectSchema.virtual('files', {
  ref: 'File',
  localField: '_id',
  foreignField: 'project',
  justOne: false,
});

ProjectSchema.virtual('lyrics', {
  ref: 'Lyrics',
  localField: '_id',
  foreignField: 'project',
  justOne: false,
});

module.exports = mongoose.model('Project', ProjectSchema);
