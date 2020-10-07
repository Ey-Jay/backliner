import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './GoBackButton.style';
import { ReactComponent as BackSVG } from 'assets/svg/ChevronLeft.svg';

const GoBackButton = () => {
  const history = useHistory();

  return (
    <Button onClick={() => history.goBack()}>
      <BackSVG />
    </Button>
  );
};

export default GoBackButton;
