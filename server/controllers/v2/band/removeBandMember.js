const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isEmpty, isNil } = require('ramda');

const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const removeBandMember = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid, mid } = req.params;

    if (isUserInBand(authId, bid)) {
      const band = await Band.findById(bid);

      band.members = band.members.filter((item) => item.toString() !== mid);
      const updatedBand = await band.save();

      await updatedBand
        .populate({
          path: 'members',
          select: User.publicFields(),
          match: { active: true },
        })
        .execPopulate();

      res.status(200);
      res.json({
        success: true,
        action: 'delete',
        data: updatedBand.members,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'delete',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = removeBandMember;
