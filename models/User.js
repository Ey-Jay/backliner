const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    theme: String,
    avatar: Number,
    auth_token: String,
    active: Boolean,
  },
  { timestamps: true }
);

UserSchema.virtual('bands', {
  ref: 'Band',
  localField: '_id',
  foreignField: 'members',
  justOne: false,
});

module.exports = mongoose.model('User', UserSchema);
