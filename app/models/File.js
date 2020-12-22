import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const FileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: [60, 'Name limited to 60 characters'],
    },
    author: { type: ObjectId, ref: 'User', required: true },
    band: { type: ObjectId, ref: 'Band' },
    project: { type: ObjectId, ref: 'Project' },
    url: String,
    active: Boolean,
  },
  { timestamps: true }
);

FileSchema.static(
  'publicFields',
  () => '_id title author band project url createdAt updatedAt'
);

export default mongoose.models.File || mongoose.model('File', FileSchema);
