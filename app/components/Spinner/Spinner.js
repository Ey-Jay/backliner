import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';

import {
  SpinnerContainer,
  PageSpinnerContainer,
  ModalSpinnerContainer,
} from './style';

const Spinner = ({ type }) => {
  const theme = useContext(ThemeContext);

  if (type === 'page')
    return (
      <PageSpinnerContainer>
        <Loader type="Bars" color={theme.primary} />
      </PageSpinnerContainer>
    );

  if (type === 'modal')
    return (
      <ModalSpinnerContainer>
        <Loader type="Bars" color={theme.secondary} />
      </ModalSpinnerContainer>
    );

  return (
    <SpinnerContainer>
      <Loader type="Bars" color={theme.primary} />
    </SpinnerContainer>
  );
};

export default Spinner;
