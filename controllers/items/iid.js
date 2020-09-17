const { isNil, isEmpty } = require('ramda');

const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');
const isUserInBand = require('../../utilities/isUserInBand');

const getItemById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;
    const queries = [];

    queries.push(Project.findById(iid).lean().exec());
    queries.push(Audio.findById(iid).lean().exec());
    queries.push(Video.findById(iid).lean().exec());
    queries.push(File.findById(iid).lean().exec());
    queries.push(Lyrics.findById(iid).lean().exec());

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

module.exports = { getItemById };
