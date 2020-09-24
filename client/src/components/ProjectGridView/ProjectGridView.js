import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

import { GlobalContext } from 'context/GlobalContext';

import {
  Container,
  Controls,
  ViewButton,
  FileView,
  SingleFile,
  FirstRow,
  Details,
  ProjectName,
  ItemSettingsButton,
  FileName,
  Icon,
  Author,
  Timestamp,
  NewButton,
  EmptyList,
} from './ProjectGridView.style';
import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
// import { ReactComponent as ImageIcon } from 'assets/svg/ImageIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';

const ProjectGridView = ({ data, type }) => {
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
      <FileView>
        {data.map((item) => (
          <SingleFile
            key={item._id}
            onClick={() => history.push(`/${bid}/${type}/${item._id}`)}
          >
            <Details>
              <FileName>{item.title}</FileName>
              <Icon>
                {item.type === 'audio' && <MicIcon />}
                {item.type === 'video' && <VideoIcon />}
                {item.type === 'lyrics' && <LyricsIcon />}
                {item.type === 'file' && <FileIcon />}
              </Icon>
              <Author>{item.author.name}</Author>
              <Timestamp>
                {moment(item.createdAt).format('DD/MM/YYYY')}
              </Timestamp>
            </Details>
          </SingleFile>
        ))}
      </FileView>
      {data.length === 0 && <EmptyList>No Items</EmptyList>}
    </Container>
  );
};

export default ProjectGridView;