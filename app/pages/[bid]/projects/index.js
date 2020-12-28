import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withUserAndDb from '@middleware/withAuthAndDb';
import withBandAuth from '@middleware/withBandAuth';

const ProjectsPage = () => <div>ProjectsPage</div>;

export async function getServerSideProps({ req, params }) {
  try {
    await withUserAndDb(req, verifyIdToken);
    const band = await withBandAuth(req, params);
    const { dbUser, fbUser } = req;

    return { props: { dbUser, fbUser, band } };
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
