import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const AudioSchema = new mongoose.Schema(
  {
    title: String,
    author: { type: ObjectId, ref: 'User' },
    band: { type: ObjectId, ref: 'Band' },
    project: { type: ObjectId, ref: 'Project' },
    url: String,
    active: Boolean,
  },
  { timestamps: true }
);

AudioSchema.static(
  'publicFields',
  () => '_id title author band project url createdAt updatedAt'
);

export default mongoose.models.Audio || mongoose.model('Audio', AudioSchema);
