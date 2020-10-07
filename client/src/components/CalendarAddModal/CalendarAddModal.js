import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ModalContext } from 'context/ModalContext';
import Spinner from 'components/Spinner';
import { ReactComponent as SuccessSVG } from 'assets/svg/Success.svg';
import { ReactComponent as ErrorSVG } from 'assets/svg/Error.svg';
import {
  Modal,
  IconContainer,
  Label,
  Input,
  SubmitButton,
  CancelButton,
  Controls,
} from './CalendarAddModal.style';

const CalendarAddModal = () => {
  const { dispatch, state, addCalendarEvent } = useContext(ModalContext);
  const [titleValue, setTitleValue] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => setEndDate(startDate), [startDate]);

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

  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <h2>Add Calendar Event</h2>
      <Label>Title</Label>
      <Input
        type="text"
        value={titleValue}
        onChange={(e) => setTitleValue(e.currentTarget.value)}
      />
      <Label>Start</Label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeInputLabel="Time:"
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeInput
      />
      <Label>End</Label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        minDate={startDate}
        timeInputLabel="Time:"
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeInput
      />
      <Controls>
        <SubmitButton
          onClick={() => addCalendarEvent(titleValue, startDate, endDate)}
        >
          Save
        </SubmitButton>
        <CancelButton onClick={() => dispatch({ type: 'RESET' })}>
          Cancel
        </CancelButton>
      </Controls>
    </Modal>
  );
};

export default CalendarAddModal;
