const R = require('ramda');
const User = require('../models/User');

// GET & POST
const getUser = async (req, res, next) => {
  try {
    const { authId, userData } = req;

    const user = await User.findOne(
      { auth_token: authId },
      'name avatar theme bands'
    )
      .populate('bands', '_id name avatar owner')
      .exec();

    if (R.isEmpty(user) || R.isNil(user)) {
      // User doesn't exist yet, sign them up & return data
      const newUser = await User.create({
        name: userData.name,
        theme: 'dark',
        avatar: 1,
        auth_token: authId,
        active: true,
      });

      res.json({
        success: true,
        action: 'create',
        data: newUser,
      });
    } else {
      // User exists, return data
      res.json({
        success: true,
        action: 'get',
        data: user,
      });
    }
  } catch (err) {
    next(err);
  }
};

// PUT
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

// DELETE
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

module.exports = {
  getUser,
  updateUser,
  setUserInactive,
};
