import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';

import { SpinnerContainer, PageSpinnerContainer } from './Spinner.style';

const Spinner = ({type}) => {
  const theme = useContext(ThemeContext);

  if (type === 'page') return (
    <PageSpinnerContainer>
      <Loader type="Bars" color={theme.primary} />
    </PageSpinnerContainer>
  );
  
  return (
    <SpinnerContainer>
      <Loader type="Bars" color={theme.primary} />
    </SpinnerContainer>
  );
};

export default Spinner;
