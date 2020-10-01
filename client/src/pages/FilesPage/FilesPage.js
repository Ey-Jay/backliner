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
      <Layout title="Files" type="file">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Files" type="file">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Files" type="file">
      {view === 'list' ? (
        <ListView data={data.data.data} type="file" />
      ) : (
        <GridView data={data.data.data} type="file" />
      )}
    </Layout>
  );
};

export default FilesPage;
