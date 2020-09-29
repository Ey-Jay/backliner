import React, { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';

import { Modal, DeleteButton } from './DeleteModal.style';

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
      <h2>Confirm Delete</h2>
      <DeleteButton onClick={onClickDeleteHandler}>Delete</DeleteButton>
      <button onClick={onClickCancelHandler}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;
