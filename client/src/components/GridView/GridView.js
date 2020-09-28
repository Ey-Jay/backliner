import React, { useContext, useState } from 'react';
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
  ProjectName,
  ItemSettingsButton,
  FileName,
  Icon,
  Author,
  Timestamp,
  Details,
  Divider,
  NewButton,
  EmptyList,
} from './GridView.style';
import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as ImageIcon } from 'assets/svg/ImageIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as ThreeDotsIcon } from 'assets/svg/ThreeDotsIcon.svg';
import ThreeDotsModal from 'components/ThreeDotsModal';

const GridView = ({ data, type }) => {
  const { bid } = useParams();
  const history = useHistory();
  const { view, setView, setShowAddModal } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

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
    <>
      {modalVisible ? <ThreeDotsModal setModalVisible={setModalVisible}/> : <> </>}
    <Container>
      <Controls>
        <section>
          <NewButton onClick={() => setShowAddModal(true)}>New Item</NewButton>
        </section>
        <section>
          <ViewButton active={view === 'list'} onClick={() => setView('list')}>
            <ListViewIcon />
          </ViewButton>
          <ViewButton active={view === 'grid'} onClick={() => setView('grid')}>
            <GridViewIcon />
          </ViewButton>
        </section>
      </Controls>
      <FileView>
        {data.map((item) => (
          <SingleFile
            key={item._id}
            onClick={() => history.push(`/${bid}/${type}/${item._id}`)}
          >
            <ItemSettingsButton>
              <ThreeDotsIcon onClick={modalHandler} />
            </ItemSettingsButton>
            <ProjectName color={item.project ? item.project.theme : null}>
              {item.project?.name ? item.project.name : 'No Project'}
            </ProjectName>
            <FileName>{item.title}</FileName>
            <Icon>{thumbnail}</Icon>
            <Details>
              {moment(item.createdAt).format('DD/MM/YYYY')}
              <Divider>·</Divider>
              {item.author.name}
            </Details>
          </SingleFile>
        ))}
      </FileView>
      {data.length === 0 && <EmptyList>No Items</EmptyList>}
    </Container>
    </>
  );
};

export default GridView;
