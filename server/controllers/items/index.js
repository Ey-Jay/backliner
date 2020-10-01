const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');
const getBandsForUser = require('../../utilities/getBandsForUser');
const User = require('../../models/User');
const Band = require('../../models/Band');

const getItemsForUser = async (req, res, next) => {
  try {
    const { authId } = req;
    const { itemtype } = req.params;

    const uid = await getUserIdFromAuth(authId);
    const bids = await getBandsForUser(uid);

    switch (itemtype) {
      case 'projects':
        const projects = await Project.find(
          { band: { $in: bids }, active: true },
          Project.publicFields()
        )
          .populate({
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'band',
            select: Band.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'audios',
            select: Audio.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'videos',
            select: Video.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'files',
            select: File.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'lyrics',
            select: Lyrics.publicFields(),
            match: { active: true },
          })
          .exec();

        res.json({
          success: true,
          action: 'get',
          data: projects,
        });
        break;

      case 'audio':
        const audios = await Audio.find(
          { band: { $in: bids }, active: true },
          Audio.publicFields()
        )
          .populate({
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'band',
            select: Band.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'project',
            select: Project.publicFields(),
            match: { active: true },
          })
          .exec();

        res.json({
          success: true,
          action: 'get',
          data: audios,
        });
        break;

      case 'video':
        const videos = await Video.find(
          { band: { $in: bids }, active: true },
          Video.publicFields()
        )
          .populate({
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'band',
            select: Band.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'project',
            select: Project.publicFields(),
            match: { active: true },
          })
          .exec();

        res.json({
          success: true,
          action: 'get',
          data: videos,
        });
        break;

      case 'lyrics':
        const lyrics = await Lyrics.find(
          { band: { $in: bids }, active: true },
          Lyrics.publicFields()
        )
          .populate({
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'band',
            select: Band.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'project',
            select: Project.publicFields(),
            match: { active: true },
          })
          .exec();

        res.json({
          success: true,
          action: 'get',
          data: lyrics,
        });
        break;

      case 'files':
        const files = await File.find(
          { band: { $in: bids }, active: true },
          File.publicFields()
        )
          .populate({
            path: 'author',
            select: User.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'band',
            select: Band.publicFields(),
            match: { active: true },
          })
          .populate({
            path: 'project',
            select: Project.publicFields(),
            match: { active: true },
          })
          .exec();

        res.json({
          success: true,
          action: 'get',
          data: files,
        });
        break;

      default:
        res.status(404);
        res.json({
          success: false,
          action: 'get',
          data: null,
          error: true,
          message: 'Route not found',
        });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { getItemsForUser };
