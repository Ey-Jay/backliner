import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'fb';
import { GlobalContext } from 'context/GlobalContext';
import Layout from 'layout';
import { Container, Item, Policy, } from './MobileSettings.style';

const MobileSettings = () => {
  const history = useHistory();
  const { bandID } = useContext(GlobalContext);

  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  return (
    <Layout title="Menu">
      <Container>
        <Item onClick={() => history.push(`/${bandID}/calendar`)}>
          Calendar
        </Item>
        <Item onClick={() => history.push(`/${bandID}/settings`)}>
          Workspace Settings
        </Item>
        <Item onClick={() => history.push(`/check-in`)}>Change Workspace</Item>
        <Item onClick={logoff}>Sign Out</Item>
      </Container>
      <Policy onClick={() => history.push(`/privacy-policy`)}>Privacy Policy</Policy>
    </Layout>
  );
};

export default MobileSettings;
