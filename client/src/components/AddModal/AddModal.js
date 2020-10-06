import React, { useState, useContext } from 'react';

import { ModalContext } from 'context/ModalContext';
import useGetAPInorerender from 'hooks/useGetAPInorerender';
import Spinner from 'components/Spinner';
import { ReactComponent as SuccessSVG } from 'assets/svg/Success.svg';
import { ReactComponent as ErrorSVG } from 'assets/svg/Error.svg';
import {
  Modal,
  IconContainer,
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
    return (
      <Modal onClick={(e) => e.stopPropagation()}>
        <Spinner type="modal" />
      </Modal>
    );

  if (state.isModalSuccess)
    return (
      <Modal onClick={(e) => e.stopPropagation()}>
        <IconContainer>
          <SuccessSVG />
        </IconContainer>
      </Modal>
    );

  if (state.isModalError)
    return (
      <Modal onClick={(e) => e.stopPropagation()}>
        <IconContainer>
          <ErrorSVG />
        </IconContainer>
      </Modal>
    );

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
    <Modal onClick={(e) => e.stopPropagation()}>
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
            color="#EE964B"
            active={projectColor === '#EE964B'}
            onClick={() => setProjectColor('#EE964B')}
          />
          <ColorOption
            color="#EF6B7B"
            active={projectColor === '#EF6B7B'}
            onClick={() => setProjectColor('#EF6B7B')}
          />
          <ColorOption
            color="#1B998B"
            active={projectColor === '#1B998B'}
            onClick={() => setProjectColor('#1B998B')}
          />
          <ColorOption
            color="#4BB3FD"
            active={projectColor === '#4BB3FD'}
            onClick={() => setProjectColor('#4BB3FD')}
          />
        </Colors>
      </Form>
      <Controls>
        <SubmitButton onClick={postHandler}>Add</SubmitButton>
        <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
      </Controls>
    </Modal>
  ) : (
    <Modal onClick={(e) => e.stopPropagation()}>
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
