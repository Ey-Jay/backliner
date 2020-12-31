import Project from '@models/Project';
import User from '@models/User';
import Audio from '@models/Audio';
import Video from '@models/Video';
import Lyrics from '@models/Lyrics';
import File from '@models/File';

const getProjectsByBid = async (bid) => {
  const projects = await Project.find({ band: bid }, Project.publicFields())
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
  return JSON.parse(JSON.stringify(projects));
};

export default getProjectsByBid;
