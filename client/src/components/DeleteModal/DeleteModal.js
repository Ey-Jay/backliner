import React, { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';

import { Modal, DeleteButton } from './DeleteModal.style';

const DeleteModal = () => {
  const { dispatch, deleteItem } = useContext(ModalContext);
  const onClickDeleteHandler = () => {
    deleteItem();
    dispatch({ type: 'RESET' });
  };

  const onClickCancelHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <Modal>
      <h2>Confirm Delete</h2>
      <DeleteButton onClick={onClickDeleteHandler}>Delete</DeleteButton>
      <button onClick={onClickCancelHandler}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;
