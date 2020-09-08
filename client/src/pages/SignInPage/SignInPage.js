import React from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';

const SignInPage = () => {
  const history = useHistory();
  const provider = new firebase.auth.GoogleAuthProvider();
  const onClickHandler = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => history.push('/protected'))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={onClickHandler}>Google</button>
    </div>
  );
};

export default SignInPage;
