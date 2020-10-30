import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';

import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const AudioPage = () => {
  const { view } = useContext(GlobalContext);
  const { audios, isAPILoading, error } = useContext(APIContext);

  if (isAPILoading)
    return (
      <Layout title="Audio" type="audio">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Audio" type="audio">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Audio" type="audio">
      {view === 'list' ? (
        <ListView data={audios} type="audio" />
      ) : (
        <GridView data={audios} type="audio" />
      )}
    </Layout>
  );
};

export default AudioPage;
