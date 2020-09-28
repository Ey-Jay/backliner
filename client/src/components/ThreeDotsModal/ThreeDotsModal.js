import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ModalBackground, Modal, ModalControls } from './ThreeDotsModal.style';
import DeleteModal from 'components/DeleteModal';

const ThreeDotsModal = ({ setModalVisible }) => {
  const history = useHistory();
  const { bid, type, id } = useParams();
  const [deleteVisible, setDeleteVisible] = useState(false);

  const modalHandler = (e) => {
    setDeleteVisible(true);
  };

  const onCloseModal = (e) => {
    setModalVisible(false);
  };
  return (
    <>
      {deleteVisible ? (
        <DeleteModal setDeleteVisible={setDeleteVisible} />
      ) : (
        <> </>
      )}
      <ModalBackground onClick={onCloseModal}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <ModalControls>
            <button onClick={() => history.push(`/${bid}/edit-${type}/${id}`)}>
              Edit
            </button>
            <button onClick={modalHandler}>Delete</button>
          </ModalControls>
        </Modal>
      </ModalBackground>
    </>
  );
};

export default ThreeDotsModal;
