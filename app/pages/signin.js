import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import FirebaseAuth from '@components/FirebaseAuth';

const SignInPage = () => {
  return (
    <div>
      <p>Sign in</p>
      <div>
        <FirebaseAuth />
      </div>
    </div>
  );
};

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
    // Show sign in
    return {
      props: {},
    };
  }
}

export default SignInPage;
