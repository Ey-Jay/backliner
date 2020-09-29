import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';
import Spinner from 'components/Spinner';
import { ReactComponent as SuccessSVG } from 'assets/svg/Success.svg';
import { ReactComponent as ErrorSVG } from 'assets/svg/Error.svg';
import {
  Modal,
  IconContainer,
  ModalControls,
  Button,
} from './ThreeDotsModal.style';

const ThreeDotsModal = () => {
  const history = useHistory();
  const { state, dispatch, bid } = useContext(ModalContext);

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

  const editOptionHandler = () => {
    history.push(`/${bid}/edit-${state.dotsType}/${state.dotsId}`);
    dispatch({ type: 'RESET' });
  };

  const deleteOptionHandler = () =>
    dispatch({
      type: 'SHOW_DELETE',
      payload: {
        id: state.dotsId,
        type: state.dotsType,
      },
    });

  const cancelOptionHandler = () => dispatch({ type: 'RESET' });

  return (
    <Modal>
      <h2>{state.dotsTitle}</h2>
      <ModalControls>
        <Button onClick={editOptionHandler}>Edit</Button>
        <Button onClick={deleteOptionHandler}>Delete</Button>
        <Button onClick={cancelOptionHandler}>Cancel</Button>
      </ModalControls>
    </Modal>
  );
};

export default ThreeDotsModal;
