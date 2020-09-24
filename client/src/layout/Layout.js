import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';
import firebase from 'fb';
import useGetAPI from 'hooks/useGetAPI';
import Navbar from 'components/Navbar';
import ChatBox from 'components/ChatBox';
import RoundButton from 'components/RoundButton';
import AddModal from 'components/AddModal';
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
  const band = useGetAPI(`/bands/${bid}`);

  const { showAddModal, setShowAddModal } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(true);
  const history = useHistory();

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
              <RoundButton icon="search" />
              <RoundButton icon="plus" onClick={() => setShowAddModal(true)} />
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
      {showAddModal ? <AddModal type={type} /> : null}
    </>
  );
};

export default Layout;
