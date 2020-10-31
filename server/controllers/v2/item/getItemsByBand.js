const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const isUserInBand = require('../../utilities/isUserInBand');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');
const Band = require('../../models/Band');
const User = require('../../models/User');

const getItemsByBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid, itemtype } = req.params;

    if (isUserInBand(authId, bid)) {
      switch (itemtype) {
        case 'projects':
          const projects = await Project.find(
            { band: bid, active: true },
            Project.publicFields()
          )
            .populate({
              path: 'author',
              select: User.publicFields(),
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
              path: 'lyrics',
              select: Lyrics.publicFields(),
              match: { active: true },
            })
            .populate({
              path: 'files',
              select: File.publicFields(),
              match: { active: true },
            })
            .exec();

          res.status(200);
          res.json({
            success: true,
            action: 'get',
            data: projects,
          });

          break;

        case 'audio':
          const audios = await Audio.find(
            { band: bid, active: true },
            Audio.publicFields()
          )
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .exec();

          res.status(200);
          res.json({
            success: true,
            action: 'get',
            data: audios,
          });

          break;

        case 'video':
          const videos = await Video.find(
            { band: bid, active: true },
            Video.publicFields()
          )
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .exec();

          res.status(200);
          res.json({
            success: true,
            action: 'get',
            data: videos,
          });

          break;

        case 'files':
          const files = await File.find(
            { band: bid, active: true },
            File.publicFields()
          )
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .exec();

          res.status(200);
          res.json({
            success: true,
            action: 'get',
            data: files,
          });

          break;

        case 'lyrics':
          const lyrics = await Lyrics.find(
            { band: bid, active: true },
            Lyrics.publicFields()
          )
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .exec();

          res.status(200);
          res.json({
            success: true,
            action: 'get',
            data: lyrics,
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

module.exports = getItemsByBand;
