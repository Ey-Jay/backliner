import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const BandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a band name.'],
      maxlength: [40, 'Bandname limited to 40 characters'],
    },
    avatar: Number,
    owner: { type: ObjectId, ref: 'User' },
    members: [{ type: ObjectId, ref: 'User' }],
    google_access_token: String,
    google_refresh_token: String,
    calendar_id: String,
    dropbox_account: String,
    soundcloud_account: String,
    active: Boolean,
  },
  { timestamps: true }
);

BandSchema.static(
  'publicFields',
  () => '_id name avatar owner members createdAt'
);

export default mongoose.models?.Band || mongoose.model('Band', BandSchema);
