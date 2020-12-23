import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';

const IndexPage = () => <div>Loading ...</div>;

export async function getServerSideProps({ req }) {
  try {
    // Validate user
    const cookies = parseCookiesServerSide(req.headers.cookie);
    await verifyIdToken(cookies.auth.token);

    // Redirect to checkin
    return {
      redirect: {
        destination: '/checkin',
        permanent: false,
      },
    };
  } catch (error) {
    // Redirect to signin
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
}

export default IndexPage;
