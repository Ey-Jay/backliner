import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';

import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const VideoPage = () => {
  const { view } = useContext(GlobalContext);
  const { videos, isAPILoading, error } = useContext(APIContext);

  if (isAPILoading)
    return (
      <Layout title="Video" type="video">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Video" type="video">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Video" type="video">
      {view === 'list' ? (
        <ListView data={videos} type="video" />
      ) : (
        <GridView data={videos} type="video" />
      )}
    </Layout>
  );
};

export default VideoPage;
