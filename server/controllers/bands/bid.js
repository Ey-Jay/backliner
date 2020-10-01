const Band = require('../../models/Band');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');

const getBandById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

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

const updateBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;
    const body = req.body;
    const updates = {};

    if (body.name) updates.name = body.name;
    if (body.avatar) updates.avatar = body.avatar;
    if (body.owner) updates.owner = body.owner;
    if (body.google_account) updates.google_account = body.google_account;
    if (body.calendar_id) updates.calendar_id = body.calendar_id;
    if (body.dropbox_account) updates.dropbox_account = body.dropbox_account;
    if (body.soundcloud_account)
      updates.soundcloud_account = body.soundcloud_account;
    if (body.active) updates.active = body.active;

    if (isUserInBand(authId, bid)) {
      const updatedBand = await Band.findOneAndUpdate(
        { _id: bid },
        {
          ...updates,
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
        action: 'update',
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

module.exports = { getBandById, updateBand, setBandInactive };
