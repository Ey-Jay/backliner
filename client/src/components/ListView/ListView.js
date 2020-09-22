import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import {
  Container,
  Controls,
  ViewButton,
  List,
  ListItem,
  Icon,
  Details,
  Row,
  ProjectName,
  FileName,
  Author,
  Timestamp,
  ItemSettingsButton,
} from './ListView.style';

import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as ImageIcon } from 'assets/svg/ImageIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';

const ListView = ({ data, type }) => {
  const history = useHistory();
  const [view, setView] = useState('list');

  let thumbnail = <FileIcon />;

  switch (type) {
    case 'audio':
      thumbnail = <MicIcon />;
      break;

    case 'video':
      thumbnail = <VideoIcon />;
      break;

    case 'lyrics':
      thumbnail = <LyricsIcon />;
      break;

    case 'image':
      thumbnail = <ImageIcon />;
      break;

    default:
      thumbnail = <FileIcon />;
  }

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
            onClick={() => history.push(`/${type}/${item._id}`)}
          >
            <Icon>{thumbnail}</Icon>
            <Details>
              <Row>
                <FileName>{item.title}</FileName>
                <ProjectName>
                  {item.project ? item.project.name : 'No Project'}{' '}
                </ProjectName>
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
      </List>
    </Container>
  );
};

export default ListView;
