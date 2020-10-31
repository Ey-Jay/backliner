const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const getBandById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

    const fullBand = await Band.findOne({ _id: bid, active: true });
    const hasGoogle = fullBand.google_access_token ? true : false;

    const band = await Band.findOne(
      { _id: bid, active: true },
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

    if (isUserInBand(authId, bid)) {
      res.status(200);
      res.json({
        success: true,
        action: 'get',
        data: band,
        hasGoogle,
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

module.exports = getBandById;
