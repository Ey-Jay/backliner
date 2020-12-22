import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a project name.'],
      maxlength: [40, 'Name limited to 40 characters'],
    },
    theme: String,
    author: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    band: {
      type: ObjectId,
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

ProjectSchema.static(
  'publicFields',
  () =>
    '_id name theme author band audios videos files lyrics createdAt updatedAt'
);

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
