const Band = require('../../models/Band');
const User = require('../../models/User');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const getBandsForUser = async (req, res, next) => {
  try {
    const { authId } = req;

    const userId = await getUserIdFromAuth(authId);
    const bands = await Band.find(
      { members: userId, active: true },
      Band.publicFields()
    )
      .populate({
        path: 'owner',
        select: User.publicFields(),
        match: { active: true },
      })
      .populate({
        path: 'members',
        select: User.publicFields(),
        match: { active: true },
      })
      .exec();

    res.status(200);
    res.json({
      success: true,
      action: 'get',
      data: bands,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getBandsForUser;
