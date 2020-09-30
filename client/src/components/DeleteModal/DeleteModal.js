import React, { useContext } from 'react';

import { ModalContext } from 'context/ModalContext';
import Spinner from 'components/Spinner';
import { ReactComponent as SuccessSVG } from 'assets/svg/Success.svg';
import { ReactComponent as ErrorSVG } from 'assets/svg/Error.svg';
import {
  Modal,
  IconContainer,
  Controls,
  DeleteButton,
  CancelButton,
} from './DeleteModal.style';

const DeleteModal = () => {
  const { state, dispatch, deleteItem } = useContext(ModalContext);

  if (state.isModalLoading)
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

  const onClickDeleteHandler = () => {
    deleteItem();
  };

  const onClickCancelHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <h2>Are you sure?</h2>
      <Controls>
        <DeleteButton onClick={onClickDeleteHandler}>Delete</DeleteButton>
        <CancelButton onClick={onClickCancelHandler}>Cancel</CancelButton>
      </Controls>
    </Modal>
  );
};

export default DeleteModal;
