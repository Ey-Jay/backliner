import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { APIContext } from 'context/APIContext';
import { ModalContext } from 'context/ModalContext';

import Layout from 'layout';
import Spinner from 'components/Spinner';
import {
  Container,
  Controls,
  ListView,
  ListItem,
  Dot,
  Details,
  ItemTitle,
  Elements,
  Type,
  Icon,
  Amount,
  ItemSettingsButton,
  NewButton,
  EmptyList,
} from './ProjectsPage.style';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';

const DashboardPage = ({
  match: {
    params: { bid },
  },
}) => {
  const history = useHistory();
  const { projects, isAPILoading, error } = useContext(APIContext);
  const { dispatch } = useContext(ModalContext);

  if (error)
    return (
      <Layout title="Projects" type="project">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  if (isAPILoading)
    return (
      <Layout title="Projects" type="project">
        <Spinner type="page" />
      </Layout>
    );

  const onClickDotsHandler = (e, iid, title) => {
    e.stopPropagation();
    dispatch({
      type: 'SHOW_THREEDOTS',
      payload: { id: iid, type: 'project', title },
    });
  };

  const sortedProjects = projects.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <Layout title="Projects" type="project">
      <Container>
        <Controls>
          <section>
            <NewButton onClick={() => dispatch({ type: 'SHOW_ADDPROJECT' })}>
              New Item
            </NewButton>
          </section>
        </Controls>
        <ListView>
          {sortedProjects.map((item) => (
            <ListItem
              key={item._id}
              onClick={() => history.push(`/${bid}/project/${item._id}`)}
              color={item.theme}
            >
              <Dot color={item.theme} />
              <Details>
                <ItemTitle>{item.name}</ItemTitle>
                <Elements>
                  <Type>
                    <Icon color={item.theme}>
                      <LyricsIcon />
                    </Icon>
                    <Amount>{item.lyrics.length}</Amount>
                  </Type>
                  <Type>
                    <Icon color={item.theme}>
                      <MicIcon />
                    </Icon>
                    <Amount>{item.audios.length}</Amount>
                  </Type>
                  <Type>
                    <Icon color={item.theme}>
                      <VideoIcon />
                    </Icon>
                    <Amount>{item.videos.length}</Amount>
                  </Type>
                  <Type>
                    <Icon color={item.theme}>
                      <FileIcon />
                    </Icon>
                    <Amount>{item.files.length}</Amount>
                  </Type>
                </Elements>
              </Details>
              <ItemSettingsButton
                onClick={(e) => onClickDotsHandler(e, item._id, item.name)}
              >
                <ThreeDotsIcon />
              </ItemSettingsButton>
            </ListItem>
          ))}
          {sortedProjects.length === 0 && <EmptyList>No Projects</EmptyList>}
        </ListView>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
