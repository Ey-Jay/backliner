import React from 'react';
import ReactPlayer from 'react-player';

const SoundCloud = ({ url }) => {
  return <ReactPlayer width="100%" url={url} />;
};

export default SoundCloud;
