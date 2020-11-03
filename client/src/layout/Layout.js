import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';
import { ModalContext } from 'context/ModalContext';

import firebase from 'fb';
import GoBackButton from 'components/GoBackButton';
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

const Layout = ({ children, title }) => {
  const { bid } = useParams();
  const { setBid } = useContext(ModalContext);
  const { bandData, isAPILoading } = useContext(APIContext);

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

  if (isAPILoading) return <Spinner />;

  return (
    <>
      <NavMobile title={title} />
      <FlexContainer>
        <NavWrapper>
          <Navbar band={bandData} />
        </NavWrapper>
        <Content>
          <Header>
            <GoBackButton />
            <h1>{title}</h1>
            <section>
              {/* <RoundButton icon="bell" />
              <RoundButton icon="moon" /> */}
              <ReactTooltip effect="solid" />
              <span data-tip="Change Band">
                <RoundButton
                  icon="checkin"
                  onClick={() => history.push('/checkin')}
                />
              </span>
              <span data-tip="Sign Out">
                <RoundButton icon="logoff" onClick={logoff} />
              </span>
              {isChatVisible ? null : (
                <>
                  <ReactTooltip effect="solid" />
                  <span data-tip="Chat">
                    <RoundButton
                      icon="chat"
                      onClick={() => setIsChatVisible(!isChatVisible)}
                    />
                  </span>
                </>
              )}
            </section>
          </Header>
          <PageBody>{children}</PageBody>
        </Content>
        <ChatWrapper isOpen={isChatVisible}>
          <ChatBox
            band={bandData}
            isOpen={isChatVisible}
            setIsOpen={setIsChatVisible}
          />
        </ChatWrapper>
      </FlexContainer>
    </>
  );
};

export default Layout;
