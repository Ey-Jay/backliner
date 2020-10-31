const R = require('ramda');
const User = require('../models/User');

const setUserInactive = async (req, res, next) => {
  try {
    const { authId } = req;

    const updatedUser = await User.findOneAndUpdate(
      { auth_token: authId },
      { active: false }
    );

    const { name, active } = updatedUser;

    res.json({
      success: true,
      action: 'delete',
      data: { name, active },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = setUserInactive;
