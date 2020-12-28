import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withUserAndDb from '@middleware/withAuthAndDb';
import withBandAuth from '@middleware/withBandAuth';
import getProjectsByBid from '@utils/db/getProjectsByBid';

const ProjectsPage = ({ projects }) => (
  <div>{JSON.stringify(projects, null, 2)}</div>
);

export async function getServerSideProps({ req, params }) {
  try {
    await withUserAndDb(req, verifyIdToken);
    const band = await withBandAuth(req, params);
    const projects = await getProjectsByBid(band._id);

    const { dbUser, fbUser } = req;
    return { props: { dbUser, fbUser, band, projects } };
  } catch (error) {
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
