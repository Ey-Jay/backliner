import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';
import { Modal, ModalControls } from './ThreeDotsModal.style';

const ThreeDotsModal = () => {
  const history = useHistory();
  const { state, dispatch, bid } = useContext(ModalContext);

  if (state.isModalLoading)
    return (
      <Modal>
        <p>Loading...</p>
      </Modal>
    );

  if (state.isModalSuccess)
    return (
      <Modal>
        <p>Success!</p>
      </Modal>
    );

  if (state.isModalError)
    return (
      <Modal>
        <p>Error!</p>
      </Modal>
    );

  const editOptionHandler = () => {
    history.push(`/${bid}/edit-${state.dotsType}/${state.dotsId}`);
    dispatch({ type: 'RESET' });
  };

  const deleteOptionHandler = () =>
    dispatch({
      type: 'SHOW_DELETE',
      payload: {
        id: state.dotsId,
        type: state.dotsType,
      },
    });

  const cancelOptionHandler = () => dispatch({ type: 'RESET' });

  return (
    <Modal>
      <ModalControls>
        <button onClick={editOptionHandler}>Edit</button>
        <button onClick={deleteOptionHandler}>Delete</button>
        <button onClick={cancelOptionHandler}>Cancel</button>
      </ModalControls>
    </Modal>
  );
};

export default ThreeDotsModal;
