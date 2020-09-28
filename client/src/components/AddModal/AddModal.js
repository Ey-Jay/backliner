import React, { useState, useContext } from 'react';

import { ModalContext } from 'context/ModalContext';
import useGetAPInorerender from 'hooks/useGetAPInorerender';
import {
  Modal,
  Form,
  SubmitButton,
  CancelButton,
  Controls,
  Colors,
  ColorOption,
} from './AddModal.style';

const AddModal = () => {
  const { state, dispatch, bid, addItem } = useContext(ModalContext);

  const projectsAPI = useGetAPInorerender(`/bands/${bid}/projects`);

  const [titleValue, setTitleValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [projectValue, setProjectValue] = useState('');
  const [projectColor, setProjectColor] = useState('#0074D9');

  if (projectsAPI.loading || state.isModalLoading)
    return <Modal>Loading ...</Modal>;

  if (state.isModalSuccess) return <Modal>Success!</Modal>;

  if (state.isModalError) return <Modal>Error!</Modal>;

  let headline = '';
  let itemtype = '';

  switch (state.addType) {
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

  const postData =
    state.addType === 'project'
      ? {
          name: titleValue,
          theme: projectColor,
        }
      : {
          title: titleValue,
          url: urlValue,
          project: projectValue,
        };

  const postHandler = () => addItem(postData, itemtype);

  const cancelHandler = () => dispatch({ type: 'RESET' });

  return state.addType === 'project' ? (
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
        <SubmitButton onClick={postHandler}>Add</SubmitButton>
        <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
      </Controls>
    </Modal>
  ) : (
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
          {projectsAPI.data.data.data.map((proj) => (
            <option value={proj._id} key={proj._id}>
              {proj.name}
            </option>
          ))}
        </select>
      </Form>
      <Controls>
        <SubmitButton onClick={postHandler}>Add</SubmitButton>
        <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
      </Controls>
    </Modal>
  );
};

export default AddModal;
