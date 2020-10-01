import React, { useState, useContext } from 'react';

import { ModalContext } from 'context/ModalContext';
import {
  Modal,
  ModalControls,
  AddButton,
  CancelButton,
} from './AddBandModal.style';

const AddBandModal = () => {
  const { state, dispatch, addBand } = useContext(ModalContext);
  const [nameFieldValue, setNameFieldValue] = useState('');

  if (state.isModalLoading) return <Modal>Loading ...</Modal>;

  if (state.isModalSuccess) return <Modal>Success!</Modal>;

  if (state.isModalError) return <Modal>Error!</Modal>;

  const onChangeHandler = (e) => setNameFieldValue(e.currentTarget.value);

  const handleOnClickAdd = () => addBand(nameFieldValue);

  const handleOnClickCancel = () => dispatch({ type: 'RESET' });

  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <h2>Add Band</h2>
      <label>Name</label>
      <input type="text" value={nameFieldValue} onChange={onChangeHandler} />
      <ModalControls>
        <AddButton onClick={handleOnClickAdd}>Add</AddButton>
        <CancelButton onClick={handleOnClickCancel}>Cancel</CancelButton>
      </ModalControls>
    </Modal>
  );
};

export default AddBandModal;
