const R = require('ramda');
const User = require('../models/User');

// GET & POST
const getUser = async (req, res, next) => {
  try {
    const { authId, userData } = req;

    const user = await User.findOne(
      { auth_token: authId },
      'name avatar theme bands active'
    )
      .populate({
        path: 'bands',
        select: 'name avatar owner members',
        populate: { path: 'members', select: 'name avatar theme' },
      })
      .exec();

    if (R.isEmpty(user) || R.isNil(user) || !user._id) {
      // User doesn't exist yet, sign them up & return data
      const newUser = await User.create({
        name: userData.name,
        email: userData.email,
        theme: 'dark',
        avatar: userData.picture,
        auth_token: authId,
        active: true,
      });

      res.status(200);
      res.json({
        success: true,
        action: 'create',
        data: newUser,
      });
    } else {
      // User exists, return data
      res.status(200);
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
