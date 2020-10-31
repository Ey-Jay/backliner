const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    theme: String,
    avatar: String,
    auth_token: { type: String, unique: true, required: true },
    active: { type: Boolean, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

UserSchema.virtual('bands', {
  ref: 'Band',
  localField: '_id',
  foreignField: 'members',
  justOne: false,
});

UserSchema.static(
  'publicFields',
  () => '_id name email theme avatar createdAt'
);

module.exports = mongoose.model('User', UserSchema);
