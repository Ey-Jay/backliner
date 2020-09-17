const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

const Project = require('../../models/Project');
const Audio = require('../../models/Audio');
const Video = require('../../models/Video');
const File = require('../../models/File');
const Lyrics = require('../../models/Lyrics');
const isUserInBand = require('../../utilities/isUserInBand');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const getItemsByBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid, itemtype } = req.params;

    if (isUserInBand(authId, bid)) {
      switch (itemtype) {
        case 'projects':
          const projects = await Project.find(
            { band: bid },
            'name theme author active createdAt updatedAt'
          )
            .populate('author', 'name avatar active')
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
            { band: bid },
            'title author project url createdAt updatedAt'
          )
            .populate('author', 'name avatar active')
            .populate('project', 'name theme active')
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
            { band: bid },
            'title author project url createdAt updatedAt'
          )
            .populate('author', 'name avatar active')
            .populate('project', 'name theme active')
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
            { band: bid },
            'title author project url createdAt updatedAt'
          )
            .populate('author', 'name avatar active')
            .populate('project', 'name theme active')
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
            { band: bid },
            'title author project url createdAt updatedAt'
          )
            .populate('author', 'name avatar active')
            .populate('project', 'name theme active')
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

          await newProject
            .populate('band', 'name avatar owner members active')
            .execPopulate();
          await newProject
            .populate('author', 'name avatar active')
            .execPopulate();

          const { name, theme, author, band, active } = newProject;

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: { name, theme, author, band, active },
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
            .populate('band', 'name avatar owner members active')
            .execPopulate();
          await newAudio
            .populate('author', 'name avatar active')
            .execPopulate();
          await newAudio
            .populate('project', 'name theme author active')
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
            .populate('band', 'name avatar owner members active')
            .execPopulate();
          await newVideo
            .populate('author', 'name avatar active')
            .execPopulate();
          await newVideo
            .populate('project', 'name theme author active')
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
            .populate('band', 'name avatar owner members active')
            .execPopulate();
          await newFile.populate('author', 'name avatar active').execPopulate();
          await newFile
            .populate('project', 'name theme author active')
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

          await newLyrics
            .populate('band', 'name avatar owner members active')
            .execPopulate();
          await newLyrics
            .populate('author', 'name avatar active')
            .execPopulate();
          await newLyrics
            .populate('project', 'name theme author active')
            .execPopulate();

          res.status(200);
          res.json({
            success: true,
            action: 'create',
            data: {
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

module.exports = { getItemsByBand, createItem };
