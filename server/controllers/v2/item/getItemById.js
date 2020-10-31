const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const { isNil, isEmpty } = require('ramda');

const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const isUserInBand = require('../../utilities/isUserInBand');
const User = require('../../models/User');

const getItemById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;
    const queries = [];

    queries.push(
      Project.findById(iid)
        .populate({
          path: 'audios',
          select: Audio.publicFields(),
          match: { active: true },
          populate: {
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          },
        })
        .populate({
          path: 'videos',
          select: Video.publicFields(),
          match: { active: true },
          populate: {
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          },
        })
        .populate({
          path: 'files',
          select: File.publicFields(),
          match: { active: true },
          populate: {
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          },
        })
        .populate({
          path: 'lyrics',
          select: Lyrics.publicFields(),
          match: { active: true },
          populate: {
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          },
        })
        .exec()
    );
    queries.push(
      Audio.findById(iid).lean().populate('project').populate('author')
    );
    queries.push(
      Video.findById(iid).lean().populate('project').populate('author')
    );
    queries.push(
      File.findById(iid).lean().populate('project').populate('author')
    );
    queries.push(
      Lyrics.findById(iid).lean().populate('project').populate('author')
    );

    const results = await Promise.all(queries);
    const cleanResult = results.find((item) => !isNil(item) && !isEmpty(item));

    if (isUserInBand(authId, cleanResult.band)) {
      res.json({
        success: true,
        action: 'get',
        data: cleanResult,
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

module.exports = getItemById;
