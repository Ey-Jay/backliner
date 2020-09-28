import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';

import { ReactComponent as LogoSVG } from 'assets/svg/Logo.svg';
import { ReactComponent as GoogleSignInIcon } from 'assets/svg/GoogleSignInIcon.svg';
import { Container, Flex, SignInButton } from './SignInPage.style';
import { apiUrl } from 'config/constants';

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
        <Flex>
          <div>
            <LogoSVG />
          </div>
          <h1>backliner</h1>
        </Flex>
        <SignInButton onClick={onClickHandler}>
          <GoogleSignInIcon /> Sign in with Google
        </SignInButton>
      </div>
    </Container>
  );
};

export default SignInPage;
