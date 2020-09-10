import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';

import firebase from 'fb';

const SignInPage = () => {
  const { currentUser } = useContext(AuthContext);

  const provider = new firebase.auth.GoogleAuthProvider();
  const onClickHandler = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((e) => console.error(e));
  };

  if (currentUser) return <Redirect to="/projects" />;

  return (
    <>
      <h1>Sign In</h1>
      <button onClick={onClickHandler}>Google</button>
    </>
  );
};

export default SignInPage;
