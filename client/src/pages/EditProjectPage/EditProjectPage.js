import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { ModalContext } from 'context/ModalContext';
import firebase from 'fb';
import { apiUrl } from 'config/constants';
import Layout from 'layout';
import {
  Container,
  ItemList,
  Item,
  IconWrapper,
  ItemDescription,
  TrashWrapper,
  Colors,
  Color,
  DangerZone,
  DeleteButton,
  SaveButton,
} from './EditProjectPage.style';
import useGetAPInorerender from 'hooks/useGetAPInorerender';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
// import { ReactComponent as ImageIcon } from 'assets/svg/ImageIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';
import { ReactComponent as TrashIcon } from 'assets/svg/TrashIcon.svg';

const EditProjectPage = ({
  match: {
    params: { bid, pid },
  },
}) => {
  const history = useHistory();
  const { dispatch } = useContext(ModalContext);
  const { data, loading, error } = useGetAPInorerender(`/projects/${pid}`);
  const [isLoading, setIsLoading] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [theme, setTheme] = useState('#0074D9');

  useEffect(() => {
    if (data) {
      setTheme(data?.data?.data?.theme);
      setNameValue(data?.data?.data?.name);
    }
  }, [data]);

  const onClickSave = async () => {
    try {
      setIsLoading(true);

      const postData = {
        name: nameValue,
        theme: theme,
      };

      const token = await firebase.auth().currentUser.getIdToken();
      await axios.put(`${apiUrl}/projects/${pid}`, postData, {
        headers: { authorization: `Bearer ${token}` },
      });

      setIsLoading(false);
      history.push(`/${bid}/projects`);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading || isLoading)
    return (
      <Layout title="Edit Project">
        <Container>
          <p>Loading ...</p>
        </Container>
      </Layout>
    );

  if (error)
    return (
      <Layout title="Edit Project">
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
    <Layout title="Edit Project">
      <Container>
        <section>
          <label>Project Name</label>
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.currentTarget.value)}
          />
        </section>
        <section>
          <label>Tag Color</label>
          <Colors>
            <Color
              color="#0074D9"
              onClick={() => setTheme('#0074D9')}
              active={theme === '#0074D9'}
            />
            <Color
              color="#FF4136"
              onClick={() => setTheme('#FF4136')}
              active={theme === '#FF4136'}
            />
            <Color
              color="#B10DC9"
              onClick={() => setTheme('#B10DC9')}
              active={theme === '#B10DC9'}
            />
            <Color
              color="#3D9970"
              onClick={() => setTheme('#3D9970')}
              active={theme === '#3D9970'}
            />
          </Colors>
        </section>
        <section>
          <label>Items</label>
          <ItemList>
            {allItems.map((item) => (
              <Item key={item._id}>
                <IconWrapper>
                  {item.type === 'audio' && <MicIcon />}
                  {item.type === 'video' && <VideoIcon />}
                  {item.type === 'file' && <FileIcon />}
                  {item.type === 'lyrics' && <LyricsIcon />}
                </IconWrapper>
                <ItemDescription>{item.title}</ItemDescription>
                <TrashWrapper>
                  <TrashIcon />
                </TrashWrapper>
              </Item>
            ))}
          </ItemList>
        </section>
        <DangerZone>
          <h2>Danger Zone</h2>
          <DeleteButton
            onClick={() =>
              dispatch({
                type: 'SHOW_DELETE',
                payload: { id: pid, type: 'project' },
              })
            }
          >
            Delete Project
          </DeleteButton>
        </DangerZone>
        <section>
          <SaveButton onClick={onClickSave}>Save</SaveButton>
        </section>
      </Container>
    </Layout>
  );
};

export default EditProjectPage;
