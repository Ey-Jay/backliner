const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isEmpty, isNil } = require('ramda');

const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const getBandMembers = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

    const band = await Band.findById(bid)
      .populate({
        path: 'members',
        select: User.publicFields(),
        match: { active: true },
      })
      .exec();

    if (isUserInBand(authId, bid) && band && band.active) {
      res.status(200);
      res.json({
        success: true,
        action: 'get',
        data: band.members,
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

module.exports = getBandMembers;
