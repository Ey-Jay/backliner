import { useRouter } from 'next/router';

import FolderSVG from '@assets/svg/FolderIcon.svg';
import AudioSVG from '@assets/svg/MicIcon.svg';
import VideoSVG from '@assets/svg/VideoIcon.svg';
import LyricsSVG from '@assets/svg/LyricsIcon.svg';
import FileSVG from '@assets/svg/FileIcon.svg';
import SettingsSVG from '@assets/svg/SettingsIcon.svg';
import ChatSVG from '@assets/svg/ChatIcon.svg';
import {
  Container,
  NavButton,
  Top,
  Bottom,
  TopBar,
  Buttons,
  TopButton,
} from './style';

const NavMobile = ({ title, setIsChatVisible }) => {
  const router = useRouter();

  return (
    <>
      <TopBar>
        <h1>{title}</h1>
        <Buttons>
          <TopButton onClick={() => router.push(`/${bandID}/mobile-settings`)}>
            <SettingsSVG />
          </TopButton>
          <TopButton onClick={() => setIsChatVisible(true)}>
            <ChatSVG />
          </TopButton>
        </Buttons>
      </TopBar>
      <Container>
        <NavButton
          active={false}
          onClick={() => router.push(`/${bandID}/projects`)}
        >
          <Top>
            <FolderSVG />
          </Top>
          <Bottom>Projects</Bottom>
        </NavButton>
        <NavButton
          active={false}
          onClick={() => router.push(`/${bandID}/lyrics`)}
        >
          <Top>
            <LyricsSVG />
          </Top>
          <Bottom>Lyrics</Bottom>
        </NavButton>
        <NavButton
          active={false}
          onClick={() => router.push(`/${bandID}/audio`)}
        >
          <Top>
            <AudioSVG />
          </Top>
          <Bottom>Audio</Bottom>
        </NavButton>
        <NavButton
          active={false}
          onClick={() => router.push(`/${bandID}/video`)}
        >
          <Top>
            <VideoSVG />
          </Top>
          <Bottom>Video</Bottom>
        </NavButton>
        <NavButton
          active={false}
          onClick={() => router.push(`/${bandID}/files`)}
        >
          <Top>
            <FileSVG />
          </Top>
          <Bottom>Files</Bottom>
        </NavButton>
      </Container>
    </>
  );
};

export default NavMobile;
