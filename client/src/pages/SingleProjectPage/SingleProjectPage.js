import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPInorerender from 'hooks/useGetAPInorerender';
import Layout from 'layout';
import ProjectGridView from 'components/ProjectGridView';
import ProjectListView from 'components/ProjectListView';
import { Container, ProjectName } from './SingleProjectPage.style';

const SingleProjectPage = ({
  match: {
    params: { pid },
  },
}) => {
  const { view } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPInorerender(`/projects/${pid}`);

  if (loading)
    return (
      <Layout title="Projects">
        <Container>
          <p>Loading...</p>
        </Container>
      </Layout>
    );

  if (error)
    return (
      <Layout title="Projects">
        <Container>
          <p>Error: {JSON.stringify(error)}</p>
        </Container>
      </Layout>
    );

  const { audios, videos, files, lyrics } = data.data.data;

  const allItems = [...audios, ...videos, ...files, ...lyrics];

  return (
    <Layout title="Project">
      <Container>
        <ProjectName bg={data.data.data.theme}>
          {data.data.data.name}
        </ProjectName>
      </Container>
      {view === 'list' ? (
        <ProjectListView data={allItems} type="project" />
      ) : (
        <ProjectGridView data={allItems} type="project" />
      )}
    </Layout>
  );
};

export default SingleProjectPage;
