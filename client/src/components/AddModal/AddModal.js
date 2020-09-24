import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { GlobalContext } from 'context/GlobalContext';
import firebase from 'fb';
import { apiUrl } from 'config/constants';
import {
  ModalBackground,
  Modal,
  Form,
  SubmitButton,
  CancelButton,
  Controls,
  Colors,
  ColorOption,
} from './AddModal.style';

const AddModal = ({ type, setShowAddModal }) => {
  const { bid } = useParams();
  const { setRerender } = useContext(GlobalContext);

  const [isLoading, setIsLoading] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [projectValue, setProjectValue] = useState('5f5f74230cc89c198a4d47b7');
  const [projectColor, setProjectColor] = useState('#0074D9');

  if (isLoading)
    return (
      <ModalBackground>
        <Modal>Loading ...</Modal>
      </ModalBackground>
    );

  let headline = '';
  let itemtype = '';

  switch (type) {
    case 'audio':
      headline = 'Add Audio';
      itemtype = 'audio';
      break;
    case 'video':
      headline = 'Add Video';
      itemtype = 'video';
      break;
    case 'file':
      headline = 'Add File';
      itemtype = 'files';
      break;
    default:
      headline = 'Add Item';
      itemtype = 'projects';
  }

  let postUrl = `${apiUrl}/bands/${bid}/${itemtype}`;

  const postItem = async () => {
    try {
      setIsLoading(true);

      const item =
        type === 'project'
          ? {
              name: titleValue,
              theme: projectColor,
            }
          : {
              title: titleValue,
              url: urlValue,
              project: projectValue,
            };

      const token = await firebase.auth().currentUser.getIdToken();
      await axios.post(postUrl, item, {
        headers: { authorization: `Bearer ${token}` },
      });

      setTitleValue('');
      setUrlValue('');
      setProjectValue('');
      setProjectColor('#0074D9');
      setRerender(new Date());
      setShowAddModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  return type === 'project' ? (
    <ModalBackground>
      <Modal>
        <h2>Add Project</h2>
        <Form>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.currentTarget.value)}
          />
          <label>Choose Color</label>
          <Colors>
            <ColorOption
              color="#0074D9"
              active={projectColor === '#0074D9'}
              onClick={() => setProjectColor('#0074D9')}
            />
            <ColorOption
              color="#FF4136"
              active={projectColor === '#FF4136'}
              onClick={() => setProjectColor('#FF4136')}
            />
            <ColorOption
              color="#B10DC9"
              active={projectColor === '#B10DC9'}
              onClick={() => setProjectColor('#B10DC9')}
            />
            <ColorOption
              color="#3D9970"
              active={projectColor === '#3D9970'}
              onClick={() => setProjectColor('#3D9970')}
            />
          </Colors>
        </Form>
        <Controls>
          <SubmitButton onClick={() => postItem()}>Add</SubmitButton>
          <CancelButton onClick={() => setShowAddModal(false)}>
            Cancel
          </CancelButton>
        </Controls>
      </Modal>
    </ModalBackground>
  ) : (
    <ModalBackground>
      <Modal>
        <h2>{headline}</h2>
        <Form>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.currentTarget.value)}
          />
          <label htmlFor="url">URL</label>
          <input
            id="url"
            name="url"
            type="text"
            value={urlValue}
            onChange={(e) => setUrlValue(e.currentTarget.value)}
          />
          <label htmlFor="project">Project</label>
          <select
            id="project"
            name="project"
            value={projectValue}
            onChange={(e) => setProjectValue(e.currentTarget.value)}
          >
            <option value="">No Project</option>
            <option value="5f5f74230cc89c198a4d47b7">Project A</option>
          </select>
        </Form>
        <Controls>
          <SubmitButton onClick={() => postItem()}>Add</SubmitButton>
          <CancelButton onClick={() => setShowAddModal(false)}>
            Cancel
          </CancelButton>
        </Controls>
      </Modal>
    </ModalBackground>
  );
};

export default AddModal;
