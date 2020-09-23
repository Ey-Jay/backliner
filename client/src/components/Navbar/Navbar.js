import React from 'react';
import { NavLink } from 'react-router-dom';

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

const Navbar = ({ band }) => {
  return (
    <Container>
      <BandDisplay>
        <BandAvatarImg src={bandSrc} />
        <BandDescription>
          <BandName>{band.name}</BandName>
          <MembersContainer>
            {band.members.map((member) => (
              <MemberPortraitImg key={member._id} src={memberSrc} />
            ))}
          </MembersContainer>
        </BandDescription>
      </BandDisplay>
      <Menu>
        <ul>
          <NavLink to={`/${band._id}/projects`}>
            <li>Projects</li>
          </NavLink>
          <NavLink to={`/${band._id}/lyrics`}>
            <li>Lyrics</li>
          </NavLink>
          <NavLink to={`/${band._id}/audio`}>
            <li>Audio</li>
          </NavLink>
          <NavLink to={`/${band._id}/video`}>
            <li>Video</li>
          </NavLink>
          <NavLink to={`/${band._id}/files`}>
            <li>Files</li>
          </NavLink>
          <NavLink to={`/${band._id}/calendar`}>
            <li>Calendar</li>
          </NavLink>
        </ul>
      </Menu>
      <BottomButtons>
        <RoundButton icon="bell" color="secondary" />
        <RoundButton icon="moon" color="secondary" />
        <RoundButton icon="profile" color="secondary" />
      </BottomButtons>
    </Container>
  );
};

export default Navbar;
