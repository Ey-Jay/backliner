import React, { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import Spinner from 'components/Spinner';
import {
  Container,
  Controls,
  ViewButton,
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
} from './ProjectsPage.style';
import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';

const DashboardPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { data, loading, error } = useGetAPI(`/bands/${bid}/projects`);

  const { view, setView } = useContext(GlobalContext);

  if (error)
    return (
      <Layout title="Projects">
        <p>{JSON.stringify(error)}</p>
      </Layout>
    );

  if (loading)
    return (
      <Layout title="Projects">
        <Spinner type="page" />
      </Layout>
    );

  return (
    <Layout title="Projects">
      <Container>
        <Controls>
          <ViewButton active={view === 'list'} onClick={() => setView('list')}>
            <ListViewIcon />
          </ViewButton>
          <ViewButton active={view === 'grid'} onClick={() => setView('grid')}>
            <GridViewIcon />
          </ViewButton>
        </Controls>
        <ListView>
          {data.data.data.map((item) => (
            <ListItem key={item._id}>
              <Dot />
              <Details>
                <ItemTitle>{item.name}</ItemTitle>
                <Elements>
                  <Type>
                    <Icon>
                      <LyricsIcon />
                    </Icon>
                    <Amount>{item.lyrics.length}</Amount>
                  </Type>
                  <Type>
                    <Icon>
                      <MicIcon />
                    </Icon>
                    <Amount>{item.audios.length}</Amount>
                  </Type>
                  <Type>
                    <Icon>
                      <VideoIcon />
                    </Icon>
                    <Amount>{item.videos.length}</Amount>
                  </Type>
                </Elements>
              </Details>
              <ItemSettingsButton>
                <ThreeDotsIcon />
              </ItemSettingsButton>
            </ListItem>
          ))}
        </ListView>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
