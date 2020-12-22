import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const LyricsSchema = new mongoose.Schema(
  {
    title: String,
    author: { type: ObjectId, ref: 'User' },
    band: { type: ObjectId, ref: 'Band' },
    project: { type: ObjectId, ref: 'Project' },
    content: String,
    active: Boolean,
  },
  { timestamps: true }
);

LyricsSchema.static(
  'publicFields',
  () => '_id title author band project content createdAt updatedAt'
);

export default mongoose.models.Lyrics || mongoose.model('Lyrics', LyricsSchema);
