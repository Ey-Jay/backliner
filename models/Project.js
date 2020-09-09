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
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
