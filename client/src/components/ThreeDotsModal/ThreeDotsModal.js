import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import EditItemPage from "pages/EditItemPage";
import { ModalBackground, Modal, ModalControls } from './ThreeDotsModal.style';
import DeleteModal from "components/DeleteModal";



const ThreeDotsModal = ({ setModalVisible }) => {
  const history = useHistory();
  const { bid, type, id } = useParams();
  const [deleteVisible, setDeleteVisible] = useState(false);

  const modalHandler = (e) => {
    e.preventDefault();
    setDeleteVisible(true);
  };
  return (
    <>
      {deleteVisible ? <DeleteModal setDeleteVisible={setDeleteVisible}/> : <> </>}
    <ModalBackground onClick={() => setModalVisible(false)}>
      <Modal>
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
