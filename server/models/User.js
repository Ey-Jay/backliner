const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    theme: String,
    avatar: String,
    auth_token: String,
    active: Boolean,
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
