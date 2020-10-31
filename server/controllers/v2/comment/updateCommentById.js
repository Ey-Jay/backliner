const { isNil, isEmpty } = require('ramda');
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

const Comments = require('../../models/Comments');
const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const isUserInBand = require('../../utilities/isUserInBand');
const User = require('../../models/User');

const updateCommentById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { cid, iid } = req.params;
    const body = req.body;

    const queries = [];

    queries.push(Project.findById(iid).lean().exec());
    queries.push(Audio.findById(iid).lean().exec());
    queries.push(Video.findById(iid).lean().exec());
    queries.push(File.findById(iid).lean().exec());
    queries.push(Lyrics.findById(iid).lean().exec());

    const results = await Promise.all(queries);
    const cleanResult = results.find((item) => !isNil(item) && !isEmpty(item));

    if (isUserInBand(authId, cleanResult.band)) {
      const comment = await Comments.findById(cid)
        .populate({ path: 'parent_id', match: { active: true } })
        .populate({
          path: 'author',
          select: User.publicFields(),
          match: { active: true },
        })
        .exec();

      if (comment.parent_id._id.toString() === iid.toString()) {
        if (body.active) comment.active = body.active;
        if (body.parent_type) comment.parent_type = body.parent_type;
        if (body.author) comment.author = ObjectID(body.author);
        if (body.parent_id) comment.parent_id = ObjectID(body.parent_id);
        if (body.content) comment.content = body.content;

        const updatedComment = await comment.save();

        res.json({
          success: true,
          action: 'update',
          data: updatedComment,
        });
      } else {
        res.status(400);
        res.json({
          success: false,
          action: 'update',
          data: null,
          error: true,
          message: 'Bad request',
        });
      }
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'update',
        data: null,
        error: true,
        message: 'Not authorized',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = updateCommentById;
