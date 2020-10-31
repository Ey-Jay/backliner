const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isNil, isEmpty } = require('ramda');

const Comments = require('../../models/Comments');
const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const User = require('../../models/User');
const isUserInBand = require('../../utilities/isUserInBand');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const getCommentsForItem = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;

    const comments = await Comments.find({ parent_id: iid, active: true })
      .populate({ path: 'parent_id', match: { active: true } })
      .populate({
        path: 'author',
        select: User.publicFields(),
        match: { active: true },
      })
      .exec();

    // isUserInBand(authId, comments[0].parent_id.band)
    if (true) {
      res.json({
        success: true,
        action: 'get',
        data: comments,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'get',
        data: null,
        error: true,
        message: 'Not authorized',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = getCommentsForItem;
