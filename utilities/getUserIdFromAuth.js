const R = require('ramda');
const User = require('../models/User');

const getUserIdFromAuth = async (authId) => {
  try {
    const user = await User.findOne({ auth_token: authId });
    return user._id;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = getUserIdFromAuth;
