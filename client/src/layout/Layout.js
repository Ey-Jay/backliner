import React from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';
import Navbar from 'components/Navbar';
import RoundButton from 'components/RoundButton';
import { FlexContainer, NavWrapper, Content, Header } from './Layout.style';

const Layout = ({ children, title }) => {
  const history = useHistory();
  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  return (
    <FlexContainer>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <Content>
        <Header>
          <h1>{title}</h1>
          <section>
            <RoundButton icon="search" />
            <RoundButton icon="plus" />
            <RoundButton icon="logoff" onClick={logoff} />
          </section>
        </Header>
        {children}
      </Content>
    </FlexContainer>
  );
};

export default Layout;
