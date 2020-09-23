import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';

import { ReactComponent as GoogleSignInIcon } from 'assets/svg/GoogleSignInIcon.svg';
import { Container, SignInButton } from './SignInPage.style';

import firebase from 'fb';

const SignInPage = () => {
  const { currentUser } = useContext(GlobalContext);

  const provider = new firebase.auth.GoogleAuthProvider();
  const onClickHandler = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((e) => console.error(e));
  };

  if (currentUser) return <Redirect to="/checkin" />;

  return (
    <Container>
      <div>
        <h1>Welcome to Backliner</h1>
        <SignInButton onClick={onClickHandler}>
          <GoogleSignInIcon /> Sign in with Google
        </SignInButton>
      </div>
    </Container>
  );
};

export default SignInPage;
