import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const LyricsPage = () => {
  const { view } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPI(
    '/bands/5f5f5da1a3a332170b4305f5/lyrics'
  );

  if (loading)
    return (
      <Layout title="Lyrics">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Lyrics">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Lyrics">
      {view === 'list' ? (
        <ListView data={data.data.data} type="lyrics" />
      ) : (
        <GridView data={data.data.data} type="lyrics" />
      )}
    </Layout>
  );
};

export default LyricsPage;
