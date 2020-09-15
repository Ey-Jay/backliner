import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';
import Navbar from 'components/Navbar';
import ChatBox from 'components/ChatBox';
import RoundButton from 'components/RoundButton';
import {
  FlexContainer,
  NavWrapper,
  Content,
  Header,
  PageBody,
  ChatWrapper,
} from './Layout.style';

const Layout = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
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
            {isOpen ? null : (
              <RoundButton icon="chat" onClick={() => setIsOpen(!isOpen)} />
            )}
          </section>
        </Header>
        <PageBody>{children}</PageBody>
      </Content>
      <ChatWrapper isOpen={isOpen}>
        <ChatBox isOpen={isOpen} setIsOpen={setIsOpen} />
      </ChatWrapper>
    </FlexContainer>
  );
};

export default Layout;
