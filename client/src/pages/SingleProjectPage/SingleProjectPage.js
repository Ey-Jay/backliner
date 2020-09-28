import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPInorerender from 'hooks/useGetAPInorerender';
import Layout from 'layout';
import ProjectGridView from 'components/ProjectGridView';
import ProjectListView from 'components/ProjectListView';
import {
  Container,
  TitleFlex,
  Dot,
  ProjectName,
} from './SingleProjectPage.style';

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

  const allItems = [
    ...audios.map((i) => ({ ...i, type: 'audio' })),
    ...videos.map((i) => ({ ...i, type: 'video' })),
    ...files.map((i) => ({ ...i, type: 'file' })),
    ...lyrics.map((i) => ({ ...i, type: 'lyrics' })),
  ];

  return (
    <Layout title="Project">
      <Container>
        <TitleFlex>
          <Dot color={data.data.data.theme} />
          <ProjectName>{data.data.data.name}</ProjectName>
        </TitleFlex>
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
