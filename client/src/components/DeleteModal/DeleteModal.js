import React from 'react';

import { ModalBackground, Modal, DeleteButton } from './DeleteModal.style';

const DeleteModal = ({ setDeleteVisible }) => {
  return (
    <ModalBackground onClick={() => setDeleteVisible(false)}>
      <Modal>
        <h2>Confirm Delete</h2>
        <DeleteButton>Delete</DeleteButton>
      </Modal>
    </ModalBackground>
  );
};

export default DeleteModal;
