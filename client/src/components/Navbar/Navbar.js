import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';
import avatars from 'assets/band-avatars';
import {
  Container,
  UserDisplay,
  UserImage,
  UserName,
  BandDisplay,
  BandAvatarImg,
  BandDescription,
  BandName,
  MembersContainer,
  MemberPortraitImg,
  Menu,
  Policy,
} from './Navbar.style';

const Navbar = ({ band }) => {
  const { dbUser } = useContext(GlobalContext);

  return (
    <Container>
      {dbUser && (
        <UserDisplay>
          <UserImage>
            <img src={dbUser.avatar} alt="" />
          </UserImage>
          <UserName>{dbUser.name}</UserName>
        </UserDisplay>
      )}
      <BandDisplay>
        <BandAvatarImg src={avatars[band.avatar]} />
        <BandDescription>
          <BandName>{band.name}</BandName>
          <MembersContainer>
            {band.members.map((member) => (
              <MemberPortraitImg key={member._id} src={member.avatar} />
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
          <NavLink to={`/${band._id}/settings`}>
            <li>Settings</li>
          </NavLink>
          </ul>
          </Menu>
          <NavLink to={`/privacy-policy`}>
            <Policy>Privacy Policy</Policy>
          </NavLink> 
    </Container>
  );
};

export default Navbar;
