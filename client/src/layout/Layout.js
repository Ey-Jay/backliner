import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';
import { ModalContext } from 'context/ModalContext';

import firebase from 'fb';
import useGetAPI from 'hooks/useGetAPI';
import Navbar from 'components/Navbar';
import ChatBox from 'components/ChatBox';
import RoundButton from 'components/RoundButton';
import Spinner from 'components/Spinner';
import NavMobile from 'components/NavMobile';

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

  const { setBandID, isChatVisible, setIsChatVisible } = useContext(
    GlobalContext
  );
  const history = useHistory();

  useEffect(() => {
    setBid(bid);
    setBandID(bid);
    // eslint-disable-next-line
  }, [bid]);

  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  if (band.loading) return <Spinner />;

  return (
    <>
      <NavMobile title={title} />
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
              {isChatVisible ? null : (
                <RoundButton
                  icon="chat"
                  onClick={() => setIsChatVisible(!isChatVisible)}
                />
              )}
            </section>
          </Header>
          <PageBody>{children}</PageBody>
        </Content>
        <ChatWrapper isOpen={isChatVisible}>
          <ChatBox
            band={band.data.data.data}
            isOpen={isChatVisible}
            setIsOpen={setIsChatVisible}
          />
        </ChatWrapper>
      </FlexContainer>
    </>
  );
};

export default Layout;
