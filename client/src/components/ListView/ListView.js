import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

import { GlobalContext } from 'context/GlobalContext';
import { ModalContext } from 'context/ModalContext';

import {
  Container,
  Controls,
  ViewButton,
  List,
  ListItem,
  Icon,
  Details,
  Row,
  Divider,
  ProjectName,
  FileName,
  Author,
  Timestamp,
  ItemSettingsButton,
  NewButton,
  EmptyList,
} from './ListView.style';

import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';

const ListView = ({ data, type }) => {
  const { bid } = useParams();
  const history = useHistory();
  const { view, setView } = useContext(GlobalContext);
  const { dispatch } = useContext(ModalContext);

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

    default:
      thumbnail = <FileIcon />;
  }

  const onClickNewHandler = () =>
    dispatch({ type: 'SHOW_ADDITEM', payload: type });

  return (
    <>
      <Container>
        <Controls>
          <section>
            <NewButton onClick={onClickNewHandler}>New Item</NewButton>
          </section>
          <section>
            <ViewButton
              active={view === 'list'}
              onClick={() => setView('list')}
            >
              <ListViewIcon />
            </ViewButton>
            <ViewButton
              active={view === 'grid'}
              onClick={() => setView('grid')}
            >
              <GridViewIcon />
            </ViewButton>
          </section>
        </Controls>
        <List>
          {data.map((item) => (
            <ListItem
              key={item._id}
              onClick={() => history.push(`/${bid}/${type}/${item._id}`)}
            >
              <Icon>{thumbnail}</Icon>
              <Details>
                <Row>
                  <FileName>{item.title}</FileName>
                  <ProjectName color={item.project ? item.project.theme : null}>
                    {item.project?.name ? item.project.name : 'No Project'}
                  </ProjectName>
                </Row>
                <Row>
                  <Timestamp>
                    {moment(item.createdAt).format('DD/MM/YYYY')}
                  </Timestamp>
                  <Divider>·</Divider>
                  <Author>{item.author.name}</Author>
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
    </>
  );
};

export default ListView;
