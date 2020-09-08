import React from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';

const DashboardPage = () => {
  const history = useHistory();
  const onClickHandler = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  return (
    <div>
      <button onClick={onClickHandler}>Sign Out</button>
    </div>
  );
};

export default DashboardPage;
