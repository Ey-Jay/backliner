import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import { useUser } from '@utils/auth/useUser';
import GoBackButton from '@components/GoBackButton';
import Navbar from '@components/Navbar';
import ChatBox from '@components/ChatBox';
import RoundButton from '@components/RoundButton';
import NavMobile from '@components/NavMobile';

import {
  FlexContainer,
  NavWrapper,
  Content,
  Header,
  PageBody,
  ChatWrapper,
} from './style';

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useUser();
  const { data } = useSWR(user ? ['/api/getUser', user.token] : null, fetcher);

  const [isChatVisible, setIsChatVisible] = useState(true);

  if (
    !user ||
    !router.query.bid ||
    ['/', '/signin', '/privacy-policy'].includes(router.pathname)
  )
    return <div>{children}</div>;

  return (
    <>
      <NavMobile title={router.pathname} setIsChatVisible={setIsChatVisible} />
      <FlexContainer>
        <NavWrapper>
          <Navbar band={data?.dbUser?.bands[0]} dbUser={data?.dbUser} />
        </NavWrapper>
        <Content>
          <Header>
            <GoBackButton />
            <h1>{router.pathname}</h1>
            <section>
              {/* <RoundButton icon="bell" />
              <RoundButton icon="moon" /> */}
              {/* <ReactTooltip effect="solid" /> */}
              <span data-tip="Change Band">
                <RoundButton
                  icon="checkin"
                  onClick={() => history.push('/checkin')}
                />
              </span>
              <span data-tip="Sign Out">
                <RoundButton icon="logoff" onClick={logout} />
              </span>
              {isChatVisible ? null : (
                <>
                  {/* <ReactTooltip effect="solid" /> */}
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
            band={data?.dbUser?.bands[0]}
            isOpen={isChatVisible}
            setIsOpen={setIsChatVisible}
          />
        </ChatWrapper>
      </FlexContainer>
    </>
  );
};

export default Layout;
