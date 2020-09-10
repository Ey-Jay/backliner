import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from 'fb';

import bandSrc from 'assets/alpen_fiesta.jpg';
import memberSrc from 'assets/ospen_schneider.jpg';
import {
  Container,
  BandDisplay,
  BandAvatarImg,
  BandDescription,
  BandName,
  MembersContainer,
  MemberPortraitImg,
  Menu,
  BottomButtons,
} from './Navbar.style';
import RoundButton from 'components/RoundButton';

const Navbar = () => {
  const history = useHistory();
  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  return (
    <Container>
      <BandDisplay>
        <BandAvatarImg src={bandSrc} />
        <BandDescription>
          <BandName>Die Ospen</BandName>
          <MembersContainer>
            <MemberPortraitImg src={memberSrc} />
            <MemberPortraitImg src={memberSrc} />
            <MemberPortraitImg src={memberSrc} />
            <MemberPortraitImg src={memberSrc} />
          </MembersContainer>
        </BandDescription>
      </BandDisplay>
      <Menu>
        <ul>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/lyrics">
            <li>Lyrics</li>
          </NavLink>
          <NavLink to="/audio">
            <li>Audio</li>
          </NavLink>
          <NavLink to="/video">
            <li>Video</li>
          </NavLink>
          <NavLink to="/files">
            <li>Files</li>
          </NavLink>
          <NavLink to="/calendar">
            <li>Calendar</li>
          </NavLink>
          <NavLink to="/chat">
            <li>Chat</li>
          </NavLink>
        </ul>
      </Menu>
      <BottomButtons>
        <RoundButton icon="bell" color="secondary" />
        <RoundButton icon="moon" color="secondary" />
        <RoundButton icon="profile" color="secondary" />
        <RoundButton icon="logoff" color="secondary" onClick={logoff} />
      </BottomButtons>
    </Container>
  );
};

export default Navbar;
