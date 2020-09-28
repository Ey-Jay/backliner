import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ModalContext } from 'context/ModalContext';

import firebase from 'fb';
import useGetAPI from 'hooks/useGetAPI';
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

const Layout = ({ children, title, type }) => {
  const { bid } = useParams();
  const { setBid } = useContext(ModalContext);
  const band = useGetAPI(`/bands/${bid}`);

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setBid(bid);
  }, []);

  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  if (band.loading) return <p>Loading ...</p>;

  return (
    <>
      <FlexContainer>
        <NavWrapper>
          <Navbar band={band.data.data.data} />
        </NavWrapper>
        <Content>
          <Header>
            <h1>{title}</h1>
            <section>
              {/* <RoundButton icon="bell" />
              <RoundButton icon="moon" /> */}
              <RoundButton
                icon="checkin"
                onClick={() => history.push('/checkin')}
              />
              <RoundButton icon="logoff" onClick={logoff} />
              {isOpen ? null : (
                <RoundButton icon="chat" onClick={() => setIsOpen(!isOpen)} />
              )}
            </section>
          </Header>
          <PageBody>{children}</PageBody>
        </Content>
        <ChatWrapper isOpen={isOpen}>
          <ChatBox
            band={band.data.data.data}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </ChatWrapper>
      </FlexContainer>
    </>
  );
};

export default Layout;
