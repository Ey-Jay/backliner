import React, { useState } from 'react';

import Layout from 'layout';
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

const DashboardPage = () => {
  const [view, setView] = useState('list');

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
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
          <ListItem>
            <Dot />
            <Details>
              <ItemTitle>ItemTitle</ItemTitle>
              <Elements>
                <Type>
                  <Icon>
                    <LyricsIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <MicIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
                <Type>
                  <Icon>
                    <VideoIcon />
                  </Icon>
                  <Amount>1</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
        </ListView>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
