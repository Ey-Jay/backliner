const R = require('ramda');
const User = require('../models/User');

const updateUser = async (req, res, next) => {
  try {
    const { authId } = req;
    const body = req.body;
    const updates = {};

    if (body.name) updates.name = body.name;
    if (body.theme) updates.theme = body.theme;
    if (body.avatar) updates.avatar = body.avatar;
    if (body.active) updates.active = body.active;

    const updatedUser = await User.findOneAndUpdate(
      { auth_token: authId },
      { ...updates }
    );

    const { name, theme, avatar, active } = updatedUser;

    res.json({
      success: true,
      action: 'update',
      data: { name, theme, avatar, active },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updateUser;
