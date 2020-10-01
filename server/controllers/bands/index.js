const mongoose = require('mongoose');

const Band = require('../../models/Band');
const User = require('../../models/User');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const ObjectID = mongoose.Types.ObjectId;

const getBands = async (req, res, next) => {
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

const createBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const body = req.body;
    console.log(body);
    const userId = await getUserIdFromAuth(authId);
    const newBand = await Band.create({
      name: body.name || 'Untitled Band',
      avatar: body.avatar || 1,
      owner: ObjectID(userId),
      members: [ObjectID(userId)],
      google_account: null,
      calendar_id: null,
      dropbox_account: null,
      soundcloud_account: null,
      active: true,
    });

    await newBand.populate('owner', User.publicFields()).execPopulate();
    await newBand
      .populate({
        path: 'members',
        select: User.publicFields(),
        match: { active: true },
      })
      .execPopulate();

    const { _id, name, avatar, owner, members, active } = newBand;

    res.status(200);
    res.json({
      success: true,
      action: 'create',
      data: {
        _id,
        name,
        avatar,
        owner,
        members,
        active,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getBands, createBand };
