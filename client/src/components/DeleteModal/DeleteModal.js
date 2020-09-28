import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from 'config/constants';
import useGetAPI from 'hooks/useGetAPI';
import { GlobalContext } from 'context/GlobalContext';

import { ModalBackground, Modal, DeleteButton } from './DeleteModal.style';

const DeleteModal = ({ setDeleteVisible, type }) => {
  const { id, bid } = useParams();
  const { data } = useGetAPI(`/${type}/${id}`);
  const { currentUser } = useContext(GlobalContext);
  const history = useHistory();
  const deleteItem = () => {
    const token = currentUser.getIdToken();
    axios
      .delete(`${apiUrl}/${type}/${data.data.data._id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => history.push(`/${bid}/${type}/${res.data.data._id}`))
      .catch((err) => console.error(err));
  };
  return (
    <ModalBackground onClick={() => setDeleteVisible(false)}>
      <Modal>
        <h2>Confirm Delete</h2>
        <DeleteButton onClick={deleteItem}>Delete</DeleteButton>
      </Modal>
    </ModalBackground>
  );
};

export default DeleteModal;
