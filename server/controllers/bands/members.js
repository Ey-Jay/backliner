const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isEmpty, isNil } = require('ramda');

const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const getMembersFromBand = async (req, res, next) => {
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

const addMemberToBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;
    const body = req.body;

    if (!body.member_id) {
      res.status(400);
      res.json({
        success: false,
        action: 'post',
        data: null,
        error: true,
        message: 'Bad request',
      });
    }

    const band = await Band.findById(bid);

    if (isUserInBand(authId, bid) && band.active) {
      const isAlreadyInBand = band.members.filter(
        (member) => `${member}` === body.member_id
      );

      console.log(band.members);

      console.log(isAlreadyInBand);

      if (!isEmpty(isAlreadyInBand)) {
        res.status(400);
        res.json({
          success: false,
          action: 'post',
          data: null,
          error: true,
          message: 'Bad request',
        });
      } else {
        band.members.push(ObjectID(body.member_id));
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
          action: 'post',
          data: updatedBand.members,
        });
      }
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'post',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    }
  } catch (e) {
    next(e);
  }
};

const removeMemberFromBand = async (req, res, next) => {
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

module.exports = { getMembersFromBand, addMemberToBand, removeMemberFromBand };
