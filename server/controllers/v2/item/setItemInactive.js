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

const setItemInactive = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;
    const queries = [];

    queries.push(Project.findById(iid).exec());
    queries.push(Audio.findById(iid).exec());
    queries.push(Video.findById(iid).exec());
    queries.push(File.findById(iid).exec());
    queries.push(Lyrics.findById(iid).exec());

    const results = await Promise.all(queries);
    const cleanResult = results.find((item) => !isNil(item) && !isEmpty(item));

    if (isUserInBand(authId, cleanResult.band)) {
      cleanResult.active = false;
      const updatedDocument = await cleanResult.save();

      res.json({
        success: true,
        action: 'delete',
        data: updatedDocument,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'delete',
        data: null,
        error: true,
        message: 'Not authorized',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = setItemInactive;
