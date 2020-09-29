import React, { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';

import {
  Modal,
  Controls,
  DeleteButton,
  CancelButton,
} from './DeleteModal.style';

const DeleteModal = () => {
  const { state, dispatch, deleteItem } = useContext(ModalContext);

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

  const onClickDeleteHandler = () => {
    deleteItem();
  };

  const onClickCancelHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <Modal>
      <h2>Are you sure?</h2>
      <Controls>
        <DeleteButton onClick={onClickDeleteHandler}>Delete</DeleteButton>
        <CancelButton onClick={onClickCancelHandler}>Cancel</CancelButton>
      </Controls>
    </Modal>
  );
};

export default DeleteModal;
