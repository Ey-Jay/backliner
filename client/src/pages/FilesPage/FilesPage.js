import React, { useState } from "react";

import useGetAPI from "hooks/useGetAPI";
import Layout from "layout";
import GridView from "components/GridView";
import Spinner from "components/Spinner";


const FilesPage = () => {
  const { data, loading, error } = useGetAPI(
    "/bands/5f5f5da1a3a332170b4305f5/files"
  );

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
      <GridView data={data.data.data} type="files" />
    </Layout>
  );
};  

export default FilesPage;
