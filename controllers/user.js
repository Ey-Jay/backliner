const User = require('../models/User');

const getUser = async (req, res, next) => {
  try {
    const { authId } = req;
    // 5f565843f0b5220df874ce3b

    // check if user exists in db
    const user = await User.find({ auth_token: authId }, 'name avatar').exec();
    // no --> create user
    // yes --> return data

    res.json({
      success: true,
      msg: `Get data for user with ID ${authId}`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
};
