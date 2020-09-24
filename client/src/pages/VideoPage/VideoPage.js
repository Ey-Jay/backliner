import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';

import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const VideoPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { view } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPI(`/bands/${bid}/video`);

  if (loading)
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
        <ListView data={data.data.data} type="video" />
      ) : (
        <GridView data={data.data.data} type="video" />
      )}
    </Layout>
  );
};

export default VideoPage;
