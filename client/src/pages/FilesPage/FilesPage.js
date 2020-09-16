import React, { useState } from "react";

import Layout from "layout";
import {
  Container,
  Controls,
  ViewButton,
  FileView,
  SingleFile,
  Details,
  ProjectName,
  FileName,
  Icon,
  Author,
  Timestamp,
} from "./FilesPage.style";
import { ReactComponent as GridViewIcon } from 'assets/svg/GridViewIcon.svg';
import { ReactComponent as ListViewIcon } from 'assets/svg/ListViewIcon.svg';
import { ReactComponent as LyricsIcon } from "assets/svg/LyricsIcon.svg";
import { ReactComponent as MicIcon } from "assets/svg/MicIcon.svg";
import { ReactComponent as VideoIcon } from "assets/svg/VideoIcon.svg";
import { ReactComponent as ImageIcon } from "assets/svg/ImageIcon.svg";
import { ReactComponent as FileIcon } from "assets/svg/FileIcon.svg";
// import { ReactComponent as VideoIcon } from "assets/svg/VideoIcon.svg";


const FilesPage = () => {
  const [view, setView] = useState('grid');
  return (
    <Layout title="Files">
      <Container>
      <Controls>
          <ViewButton active={view === 'list'} onClick={() => setView('list')}>
            <ListViewIcon />
          </ViewButton>
          <ViewButton active={view === 'grid'} onClick={() => setView('grid')}>
            <GridViewIcon />
          </ViewButton>
        </Controls>
        <FileView>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Lyrics</FileName>
              <Icon>
                <LyricsIcon />
              </Icon>
              <Author>Joss Doebler</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Guitar</FileName>
              <Icon>
                <MicIcon />
              </Icon>
              <Author>Michael Knabe</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Clip</FileName>
              <Icon>
                <VideoIcon />
              </Icon>
              <Author>Erick Jansen</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Lyrics</FileName>
              <Icon>
                <LyricsIcon />
              </Icon>
              <Author>Joss Doebler</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Guitar</FileName>
              <Icon>
                <MicIcon />
              </Icon>
              <Author>Michael Knabe</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Clip</FileName>
              <Icon>
                <VideoIcon />
              </Icon>
              <Author>Erick Jansen</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Lyrics</FileName>
              <Icon>
                <LyricsIcon />
              </Icon>
              <Author>Joss Doebler</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Guitar</FileName>
              <Icon>
                <MicIcon />
              </Icon>
              <Author>Michael Knabe</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Cover</FileName>
              <Icon>
                <ImageIcon />
              </Icon>
              <Author>Erick Jansen</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
          <SingleFile>
            <Details>
              <ProjectName>Best of Schlager</ProjectName>
              <FileName>Schlägerei Miscfile</FileName>
              <Icon>
                <FileIcon />
              </Icon>
              <Author>Michael Knabe</Author>
              <Timestamp>Sep 16, 2020</Timestamp>
            </Details>
          </SingleFile>
        </FileView>
      </Container>
    </Layout>
  );
};

export default FilesPage;
