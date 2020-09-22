import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import GridView from 'components/GridView';
import ListView from 'components/ListView';
import Spinner from 'components/Spinner';

const AudioPage = () => {
  const { view } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPI(
    '/bands/5f5f5da1a3a332170b4305f5/audio'
  );

  if (loading)
    return (
      <Layout title="Audio">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Audio">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Audio">
      {view === 'list' ? (
        <ListView data={data.data.data} type="audio" />
      ) : (
        <GridView data={data.data.data} type="audio" />
      )}
    </Layout>
  );
};

export default AudioPage;
