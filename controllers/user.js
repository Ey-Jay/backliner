const User = require('../models/User');

const getUser = async (req, res, next) => {
  try {
    const { authId } = req;
    // 5f565843f0b5220df874ce3b

    const user = await User.find();
    res.json({
      success: true,
      msg: `Get data for user with ID ${authId}`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const postUser = async (req, res, next) => {
  try {
    const { uid, name, theme, avatar, auth_token } = req.body;

    // TODO: validate token/uid

    const user = await User.create({
      name,
      theme,
      avatar,
      auth_token,
      active: true,
    });
    res.json({ success: true, msg: 'create user', data: user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
  postUser,
};
