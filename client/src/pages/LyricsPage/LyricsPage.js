import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';

import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const LyricsPage = () => {
  const { view } = useContext(GlobalContext);
  const { lyrics, isAPILoading, error } = useContext(APIContext);

  if (isAPILoading)
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
        <ListView data={lyrics} type="lyrics" />
      ) : (
        <GridView data={lyrics} type="lyrics" />
      )}
    </Layout>
  );
};

export default LyricsPage;
