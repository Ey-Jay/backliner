import React from 'react';

import Navbar from 'components/Navbar';
import RoundButton from 'components/RoundButton';
import { FlexContainer, NavWrapper, Content, Header } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <FlexContainer>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <Content>
        <Header>
          <h1>Projects</h1>
          <section>
            <RoundButton icon="search" />
            <RoundButton icon="plus" />
          </section>
        </Header>
        {children}
      </Content>
    </FlexContainer>
  );
};

export default Layout;
