import { useState, useContext } from 'react';

import { useModalState, useModalDispatch } from 'context/Modal';
import {
  Modal,
  IconContainer,
  ModalControls,
  AddButton,
  CancelButton,
} from './style';
import Spinner from '@components/Spinner';
import SuccessSVG from '@assets/svg/Success.svg';
import ErrorSVG from '@assets/svg/Error.svg';

const AddBandModal = () => {
  const state = useModalState();
  const { dispatch, addBand } = useModalDispatch();
  const [nameFieldValue, setNameFieldValue] = useState('');

  if (state.isModalLoading)
    return (
      <Modal>
        <Spinner type="modal" />
      </Modal>
    );

  if (state.isModalSuccess)
    return (
      <Modal>
        <IconContainer>
          <SuccessSVG />
        </IconContainer>
      </Modal>
    );

  if (state.isModalError)
    return (
      <Modal>
        <IconContainer>
          <ErrorSVG />
        </IconContainer>
      </Modal>
    );

  const onChangeHandler = (e) => setNameFieldValue(e.currentTarget.value);

  const handleOnClickAdd = () => addBand(nameFieldValue);

  const handleOnClickCancel = () => dispatch({ type: 'RESET' });

  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <h2>Add Band</h2>
      <label>Name</label>
      <input
        type="text"
        value={nameFieldValue}
        onChange={onChangeHandler}
        autoFocus
      />
      <ModalControls>
        <AddButton onClick={handleOnClickAdd}>Add</AddButton>
        <CancelButton onClick={handleOnClickCancel}>Cancel</CancelButton>
      </ModalControls>
    </Modal>
  );
};

export default AddBandModal;
