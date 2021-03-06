import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';
import { GlobalContext } from 'context/GlobalContext';
import { ReactComponent as LogoSVG } from 'assets/svg/Logo.svg';
import { ReactComponent as TextSVG } from 'assets/svg/signin/Text.svg';
import { ReactComponent as GoogleSignInIcon } from 'assets/svg/GoogleSignInIcon.svg';
import { Container, Flex, SignInButton, Policy } from './SignInPage.style';

const SignInPage = () => {
  const { currentUser } = useContext(GlobalContext);
  const history = useHistory();
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
          <LogoSVG />
          <TextSVG />
        </Flex>
        <SignInButton onClick={onClickHandler}>
          <GoogleSignInIcon /> Sign in with Google
        </SignInButton>
      </div>
      <Policy onClick={() => history.push(`/privacy-policy`)}>
          Privacy Policy
        </Policy>
    </Container>
  );
};

export default SignInPage;
