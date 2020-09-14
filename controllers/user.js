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

    console.log(user);

    if (R.isEmpty(user) || R.isNil(user)) {
      const newUser = await User.create({
        name: userData.name,
        theme: 'dark',
        avatar: 1,
        auth_token: authId,
        active: true,
      });

      res.json({
        success: true,
        msg: `Created user with name ${newUser.name}`,
        data: newUser,
      });
    } else {
      res.json({
        success: true,
        msg: `Get data for user with name ${user.name}`,
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
