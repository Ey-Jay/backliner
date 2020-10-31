const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const setBandInactive = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

    if (isUserInBand(authId, bid)) {
      const updatedBand = await Band.findOneAndUpdate(
        { _id: bid },
        {
          active: false,
        }
      );

      await updatedBand
        .populate({
          path: 'owner',
          select: User.publicFields(),
          match: { active: true },
        })
        .execPopulate();
      await updatedBand
        .populate({
          path: 'members',
          select: User.publicFields(),
          match: { active: true },
        })
        .execPopulate();

      const { _id, name, members, avatar, owner, active } = updatedBand;

      res.status(200);
      res.json({
        success: true,
        action: 'delete',
        data: { _id, name, members, avatar, owner, active },
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'get',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = setBandInactive;
