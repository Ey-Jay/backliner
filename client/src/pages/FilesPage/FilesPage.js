import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import ListView from 'components/ListView';
import GridView from 'components/GridView';
import Spinner from 'components/Spinner';

const FilesPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { view } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPI(`/bands/${bid}/files`);

  if (loading)
    return (
      <Layout title="Files">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Files">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Files">
      {view === 'list' ? (
        <ListView data={data.data.data} type="audio" />
      ) : (
        <GridView data={data.data.data} type="audio" />
      )}
    </Layout>
  );
};

export default FilesPage;
