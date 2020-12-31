import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withUserAndDb from '@middleware/withAuthAndDb';
import withBandAuth from '@middleware/withBandAuth';
import getProjectsByBid from '@utils/db/getProjectsByBid';

import { useRouter } from 'next/router';
import { useModalDispatch } from '@context/Modal';
import {
  Container,
  Controls,
  ListView,
  ListItem,
  Dot,
  Details,
  ItemTitle,
  Elements,
  Type,
  Icon,
  Amount,
  ItemSettingsButton,
  NewButton,
  EmptyList,
} from '@style/pages/bid/projects';
import LyricsIcon from '@assets/svg/LyricsIcon.svg';
import MicIcon from '@assets/svg/MicIcon.svg';
import ThreeDotsIcon from '@assets/svg/ThreeDotsIcon.svg';
import VideoIcon from '@assets/svg/VideoIcon.svg';
import FileIcon from '@assets/svg/FileIcon.svg';

const ProjectsPage = ({ projects, band }) => {
  const router = useRouter();
  const { dispatch } = useModalDispatch();
  const bid = band._id;

  const onClickDotsHandler = (e, iid, title) => {
    e.stopPropagation();
    dispatch({
      type: 'SHOW_THREEDOTS',
      payload: { id: iid, type: 'project', title },
    });
  };

  const sortedProjects = projects.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
    <Container>
      <Controls>
        <section>
          <NewButton onClick={() => dispatch({ type: 'SHOW_ADDPROJECT' })}>
            New Item
          </NewButton>
        </section>
      </Controls>
      <ListView>
        {sortedProjects.map((item) => (
          <ListItem
            key={item._id}
            onClick={() => router.push(`/${bid}/projects/${item._id}`)}
            color={item.theme}
          >
            <Dot color={item.theme} />
            <Details>
              <ItemTitle>{item.name}</ItemTitle>
              <Elements>
                <Type>
                  <Icon color={item.theme}>
                    <LyricsIcon />
                  </Icon>
                  <Amount>{item.lyrics.length}</Amount>
                </Type>
                <Type>
                  <Icon color={item.theme}>
                    <MicIcon />
                  </Icon>
                  <Amount>{item.audios.length}</Amount>
                </Type>
                <Type>
                  <Icon color={item.theme}>
                    <VideoIcon />
                  </Icon>
                  <Amount>{item.videos.length}</Amount>
                </Type>
                <Type>
                  <Icon color={item.theme}>
                    <FileIcon />
                  </Icon>
                  <Amount>{item.files.length}</Amount>
                </Type>
              </Elements>
            </Details>
            <ItemSettingsButton
              onClick={(e) => onClickDotsHandler(e, item._id, item.name)}
            >
              <ThreeDotsIcon />
            </ItemSettingsButton>
          </ListItem>
        ))}
        {sortedProjects.length === 0 && <EmptyList>No Projects</EmptyList>}
      </ListView>
    </Container>
  );
};

export async function getServerSideProps({ req, params }) {
  try {
    // Middlewares
    await withUserAndDb(req, verifyIdToken);
    const band = await withBandAuth(req, params);

    // DB
    const projects = await getProjectsByBid(band._id);

    const { dbUser, fbUser } = req;
    return { props: { dbUser, fbUser, band, projects } };
  } catch (error) {
    console.log(error);
    // Redirect to index
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default ProjectsPage;
