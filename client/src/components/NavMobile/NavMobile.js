import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';
import { ReactComponent as FolderSVG } from 'assets/svg/FolderIcon.svg';
import { ReactComponent as AudioSVG } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoSVG } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as LyricsSVG } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as FileSVG } from 'assets/svg/FileIcon.svg';
import { ReactComponent as SettingsSVG } from 'assets/svg/SettingsIcon.svg';
import { ReactComponent as ChatSVG } from 'assets/svg/ChatIcon.svg';
import {
  Container,
  NavButton,
  Top,
  Bottom,
  TopBar,
  Buttons,
  TopButton,
} from './NavMobile.style';

const NavMobile = ({ title }) => {
  const location = useLocation();
  const history = useHistory();
  const { bandID } = useContext(GlobalContext);

  return (
    <>
      <TopBar>
        <h1>{title}</h1>
        <Buttons>
          <TopButton onClick={() => history.push(`/${bandID}/settings`)}>
            <SettingsSVG />
          </TopButton>
          <TopButton>
            <ChatSVG />
          </TopButton>
        </Buttons>
      </TopBar>
      <Container>
        <NavButton
          active={location.pathname.includes('project')}
          onClick={() => history.push(`/${bandID}/projects`)}
        >
          <Top>
            <FolderSVG />
          </Top>
          <Bottom>Projects</Bottom>
        </NavButton>
        <NavButton
          active={location.pathname.includes('lyrics')}
          onClick={() => history.push(`/${bandID}/lyrics`)}
        >
          <Top>
            <LyricsSVG />
          </Top>
          <Bottom>Lyrics</Bottom>
        </NavButton>
        <NavButton
          active={location.pathname.includes('audio')}
          onClick={() => history.push(`/${bandID}/audio`)}
        >
          <Top>
            <AudioSVG />
          </Top>
          <Bottom>Audio</Bottom>
        </NavButton>
        <NavButton
          active={location.pathname.includes('video')}
          onClick={() => history.push(`/${bandID}/video`)}
        >
          <Top>
            <VideoSVG />
          </Top>
          <Bottom>Video</Bottom>
        </NavButton>
        <NavButton
          active={location.pathname.includes('file')}
          onClick={() => history.push(`/${bandID}/files`)}
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
