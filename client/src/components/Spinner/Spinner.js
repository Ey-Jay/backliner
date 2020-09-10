import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';

import { SpinnerContainer } from './Spinner.style';

const Spinner = () => {
  const theme = useContext(ThemeContext);

  return (
    <SpinnerContainer>
      <Loader type="Bars" color={theme.primary} />
    </SpinnerContainer>
  );
};

export default Spinner;
