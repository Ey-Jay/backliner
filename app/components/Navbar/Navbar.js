import Link from 'next/link';
import { useRouter } from 'next/router';

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

const Navbar = ({ band, dbUser }) => {
  const router = useRouter();

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
        <BandAvatarImg src={`/band-avatars${avatars[band?.avatar || 0]}`} />
        <BandDescription>
          <BandName>{band?.name}</BandName>
          <MembersContainer>
            {band?.members.map((member) => (
              <MemberPortraitImg key={member._id} src={member.avatar} />
            ))}
          </MembersContainer>
        </BandDescription>
      </BandDisplay>
      <Menu>
        <ul>
          <Link href={`/${router.query.bid}/projects`}>
            <a>
              <li>Projects</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/lyrics`}>
            <a>
              <li>Lyrics</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/audio`}>
            <a>
              <li>Audio</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/video`}>
            <a>
              <li>Video</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/files`}>
            <a>
              <li>Files</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/calendar`}>
            <a>
              <li>Calendar</li>
            </a>
          </Link>
          <Link href={`/${router.query.bid}/settings`}>
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
