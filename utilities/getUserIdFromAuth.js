const R = require('ramda');
const User = require('../models/User');

const getUserIdFromAuth = async (authId) => {
  try {
    const user = await User.findOne({ authId: authId });
    return user._id;
  } catch (e) {
    throw new Error('Error in getUserIdFromAuth!');
  }
};

module.exports = getUserIdFromAuth;
