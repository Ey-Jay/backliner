import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const InstagramPost = ({ url }) => {
  return (
    <InstagramEmbed
      url={url}
      maxWidth={320}
      hideCaption={false}
      containerTagName="div"
    />
  );
};

export default InstagramPost;
