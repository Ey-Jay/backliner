import React from 'react';
import ReactPlayer from 'react-player';

const RawVideo = ({ url }) => {
  return <ReactPlayer url={url} />;
};

export default RawVideo;
