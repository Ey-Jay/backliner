import React from 'react';

import DailyMotion from 'embeds/DailyMotion';
import FacebookVideo from 'embeds/FacebookVideo';
import InstagramPost from 'embeds/InstagramPost';
import RawAudio from 'embeds/RawAudio';
import RawVideo from 'embeds/RawVideo';
import SoundCloud from 'embeds/SoundCloud';
import Twitch from 'embeds/Twitch';
import Vimeo from 'embeds/Vimeo';
import YouTube from 'embeds/YouTube';

const Embed = ({ url }) => {
  if (url.includes('youtube.com') && url.includes('v='))
    return <YouTube url={url} />;
  if (url.includes('dailymotion.com/video')) return <DailyMotion url={url} />;
  if (url.includes('facebook.com/watch') && url.includes('v='))
    return <FacebookVideo url={url} />;
  if (url.includes('instagram.com/p/')) return <InstagramPost url={url} />;
  if (url.includes('soundcloud.com/')) return <SoundCloud url={url} />;
  if (url.includes('twitch.tv/')) return <Twitch url={url} />;
  if (url.includes('vimeo.com/')) return <Vimeo url={url} />;
  if (
    url.includes('.mp4') ||
    url.includes('.avi') ||
    url.includes('.mov') ||
    url.includes('.wmv') ||
    url.includes('.flv') ||
    url.includes('.mkv')
  )
    return <RawVideo url={url} />;
  if (
    url.includes('.mp3') ||
    url.includes('.wav') ||
    url.includes('.m4a') ||
    url.includes('.wma') ||
    url.includes('.aac') ||
    url.includes('.ogg') ||
    url.includes('.flac')
  )
    return <RawAudio url={url} />;

  return null;
};

export default Embed;
