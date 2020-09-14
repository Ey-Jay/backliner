const R = require('ramda');
const User = require('../models/User');

const getUser = async (req, res, next) => {
  try {
    const { authId, userData } = req;

    const user = await User.findOne(
      { auth_token: authId },
      'name avatar theme bands'
    )
      .populate('bands')
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

module.exports = {
  getUser,
};
