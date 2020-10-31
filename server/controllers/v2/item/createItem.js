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

const createItem = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid, itemtype } = req.params;
    const uid = await getUserIdFromAuth(authId);
    const body = req.body;

    if (isUserInBand(authId, bid)) {
      switch (itemtype) {
        case 'projects':
          const newProject = await Project.create({
            band: ObjectID(bid),
            author: ObjectID(uid),
            theme: body.theme || '#000000',
            name: body.name || 'Untitled Project',
            active: true,
          });

          await newProject.populate('band', Band.publicFields()).execPopulate();
          await newProject
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .execPopulate();

          const { _id, name, theme, author, band, active } = newProject;

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: { _id, name, theme, author, band, active },
          });

          break;

        case 'audio':
          const newAudio = await Audio.create({
            band: ObjectID(bid),
            author: ObjectID(uid),
            project: body.project ? ObjectID(body.project) : null,
            url: body.url || null,
            title: body.title || 'Untitled Audio',
            active: true,
          });

          await newAudio
            .populate({
              path: 'band',
              select: Band.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newAudio
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newAudio
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .execPopulate();

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: {
              title: newAudio.title,
              url: newAudio.url,
              author: newAudio.author,
              band: newAudio.band,
              project: newAudio.project,
              active: newAudio.active,
            },
          });

          break;

        case 'video':
          const newVideo = await Video.create({
            band: ObjectID(bid),
            author: ObjectID(uid),
            project: body.project ? ObjectID(body.project) : null,
            url: body.url || null,
            title: body.title || 'Untitled Video',
            active: true,
          });

          await newVideo
            .populate({
              path: 'band',
              select: Band.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newVideo
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newVideo
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .execPopulate();

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: {
              title: newVideo.title,
              url: newVideo.url,
              author: newVideo.author,
              band: newVideo.band,
              project: newVideo.project,
              active: newVideo.active,
            },
          });

          break;

        case 'files':
          const newFile = await File.create({
            band: ObjectID(bid),
            author: ObjectID(uid),
            project: body.project ? ObjectID(body.project) : null,
            url: body.url || null,
            title: body.title || 'Untitled File',
            active: true,
          });

          await newFile
            .populate({
              path: 'band',
              select: Band.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newFile
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newFile
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .execPopulate();

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: {
              title: newFile.title,
              url: newFile.url,
              author: newFile.author,
              band: newFile.band,
              project: newFile.project,
              active: newFile.active,
            },
          });

          break;

        case 'lyrics':
          const newLyrics = await Lyrics.create({
            band: ObjectID(bid),
            author: ObjectID(uid),
            project: body.project ? ObjectID(body.project) : null,
            content: body.content || null,
            title: body.title || 'Untitled File',
            active: true,
          });

          await newLyrics.populate('band', Band.publicFields()).execPopulate();
          await newLyrics
            .populate({
              path: 'author',
              select: User.publicFields(),
              match: { active: true },
            })
            .execPopulate();
          await newLyrics
            .populate({
              path: 'project',
              select: Project.publicFields(),
              match: { active: true },
            })
            .execPopulate();

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: {
              _id: newLyrics._id,
              title: newLyrics.title,
              content: newLyrics.content,
              author: newLyrics.author,
              band: newLyrics.band,
              project: newLyrics.project,
              active: newLyrics.active,
            },
          });

          break;

        default:
          res.status(404);
          res.json({
            success: false,
            action: 'create',
            data: null,
            error: true,
            message: 'Route not found',
          });
      }
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'create',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = createItem;
