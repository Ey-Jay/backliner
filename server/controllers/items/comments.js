const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isNil, isEmpty } = require('ramda');

const Comments = require('../../models/Comments');
const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const isUserInBand = require('../../utilities/isUserInBand');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const getComments = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;

    const comments = await Comments.find({ parent_id: iid, active: true })
      .populate({ path: 'parent_id', match: { active: true } })
      .exec();

    if (isUserInBand(authId, comments[0].parent_id.band)) {
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

const createComment = async (req, res, next) => {
  try {
    const { authId } = req;
    const uid = await getUserIdFromAuth(authId);
    const { iid, itemtype } = req.params;
    const parent_type = itemtype.trim().replace(/^\w/, (c) => c.toUpperCase());
    const { content } = req.body;
    const queries = [];

    queries.push(Project.findById(iid).exec());
    queries.push(Audio.findById(iid).exec());
    queries.push(Video.findById(iid).exec());
    queries.push(File.findById(iid).exec());
    queries.push(Lyrics.findById(iid).exec());

    const results = await Promise.all(queries);
    const parent = results.find((item) => !isNil(item) && !isEmpty(item));

    if (!content) {
      res.status(400);
      res.json({
        success: false,
        action: 'post',
        data: null,
        error: true,
        message: 'Bad request',
      });
    } else if (isUserInBand(authId, parent.band)) {
      const createdComment = await Comments.create({
        parent_type,
        parent_id: ObjectID(iid),
        content,
        author: ObjectID(uid),
      });

      res.json({
        success: true,
        action: 'post',
        data: createdComment,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'post',
        data: null,
        error: true,
        message: 'Not authorized',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getComments,
  createComment,
};
