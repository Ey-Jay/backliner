import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

import { GlobalContext } from 'context/GlobalContext';

import {
  Container,
  Controls,
  ViewButton,
  List,
  ListItem,
  Icon,
  Details,
  Row,
  FileName,
  Author,
  Timestamp,
  ItemSettingsButton,
  EmptyList,
} from './ProjectListView.style';

import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
// import { ReactComponent as ImageIcon } from 'assets/svg/ImageIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';

const ProjectListView = ({ data, type }) => {
  const { bid } = useParams();
  const history = useHistory();
  const { view, setView } = useContext(GlobalContext);

  return (
    <Container>
      <Controls>
        <ViewButton active={view === 'list'} onClick={() => setView('list')}>
          <ListViewIcon />
        </ViewButton>
        <ViewButton active={view === 'grid'} onClick={() => setView('grid')}>
          <GridViewIcon />
        </ViewButton>
      </Controls>
      <List>
        {data.map((item) => (
          <ListItem
            key={item._id}
            onClick={() => history.push(`/${bid}/${item.type}/${item._id}`)}
          >
            <Icon>
              {item.type === 'audio' && <MicIcon />}
              {item.type === 'video' && <VideoIcon />}
              {item.type === 'lyrics' && <LyricsIcon />}
              {item.type === 'file' && <FileIcon />}
            </Icon>
            <Details>
              <Row>
                <FileName>{item.title}</FileName>
              </Row>
              <Row>
                <Author>{item.author.name}</Author>
                <Timestamp>
                  {moment(item.createdAt).format('DD/MM/YYYY')}
                </Timestamp>
              </Row>
            </Details>
            <ItemSettingsButton>
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
        ))}
        {data.length === 0 && <EmptyList>No Items</EmptyList>}
      </List>
    </Container>
  );
};

export default ProjectListView;
