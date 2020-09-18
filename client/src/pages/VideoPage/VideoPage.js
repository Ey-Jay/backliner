import React from "react";

import useGetAPI from "hooks/useGetAPI";
import Layout from "layout";
import GridView from "components/GridView";
import Spinner from "components/Spinner";

const VideoPage = () => {
  const { data, loading, error } = useGetAPI(
    "/bands/5f5f5da1a3a332170b4305f5/video"
  );

  if (loading)
    return (
      <Layout title="Video">
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title="Video">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout title="Video">
      <GridView data={data.data.data} type="video" />
    </Layout>
  );
};

export default VideoPage;
