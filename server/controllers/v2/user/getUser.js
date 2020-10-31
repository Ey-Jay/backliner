const R = require('ramda');
const Band = require('../../../models/Band');
const User = require('../../../models/User');

const getUser = async (req, res, next) => {
  try {
    const { authId, userData } = req;

    if (!authId || !userData || R.isEmpty(userData)) {
      res.status(400);
      return res.json({
        error: true,
        message: 'Bad Request: Auth token validation failed',
      });
    }

    const user = await User.findOne({ auth_token: authId }, User.publicFields())
      .populate({
        path: 'bands',
        select: Band.publicFields(),
        match: { active: true },
        populate: {
          path: 'members',
          select: User.publicFields(),
          match: { active: true },
        },
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
      res.json(newUser);
    } else {
      // User exists, return data
      res.status(200);
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
