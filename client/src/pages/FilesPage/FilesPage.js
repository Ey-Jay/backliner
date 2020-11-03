import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';

import Layout from 'layout';
import ListView from 'components/ListView';
import GridView from 'components/GridView';
import Spinner from 'components/Spinner';

const FilesPage = () => {
  const { view } = useContext(GlobalContext);
  const { files, isAPILoading, error } = useContext(APIContext);

  if (isAPILoading)
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
        <ListView data={files} type="file" />
      ) : (
        <GridView data={files} type="file" />
      )}
    </Layout>
  );
};

export default FilesPage;
