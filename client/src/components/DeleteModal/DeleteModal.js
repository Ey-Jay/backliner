import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { ModalContext } from 'context/ModalContext';

import { apiUrl } from 'config/constants';
import useGetAPI from 'hooks/useGetAPI';
import { GlobalContext } from 'context/GlobalContext';

import { ModalBackground, Modal, DeleteButton } from './DeleteModal.style';

const DeleteModal = () => {
  const {
    id,
    dispatch,
    deleteItem,
    state: { deleteType: type },
  } = useContext(ModalContext);
  const { data } = useGetAPI(`/${type}/${id}`);
  const { currentUser } = useContext(GlobalContext);
  const history = useHistory();

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
