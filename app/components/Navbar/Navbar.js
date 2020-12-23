import Link from 'next/link';

import avatars from '@assets/band-avatars';
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
} from './style';

const Navbar = ({ band, userAvatar, userName }) => {
  return (
    <Container>
      {dbUser && (
        <UserDisplay>
          <UserImage>
            <img src={userAvatar} alt="" />
          </UserImage>
          <UserName>{userName}</UserName>
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
          <Link href={`/${band._id}/projects`}>
            <a>
              <li>Projects</li>
            </a>
          </Link>
          <Link href={`/${band._id}/lyrics`}>
            <a>
              <li>Lyrics</li>
            </a>
          </Link>
          <Link href={`/${band._id}/audio`}>
            <a>
              <li>Audio</li>
            </a>
          </Link>
          <Link href={`/${band._id}/video`}>
            <a>
              <li>Video</li>
            </a>
          </Link>
          <Link href={`/${band._id}/files`}>
            <a>
              <li>Files</li>
            </a>
          </Link>
          <Link href={`/${band._id}/calendar`}>
            <a>
              <li>Calendar</li>
            </a>
          </Link>
          <Link href={`/${band._id}/settings`}>
            <a>
              <li>Settings</li>
            </a>
          </Link>
        </ul>
      </Menu>
      <Link href={`/privacy-policy`}>
        <a>
          <Policy>Privacy Policy</Policy>
        </a>
      </Link>
    </Container>
  );
};

export default Navbar;
