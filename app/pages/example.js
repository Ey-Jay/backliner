import Link from 'next/link';
import parseCookiesServerSide from '../utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '../utils/auth/firebaseAdmin';
import redirectTo from '../utils/redirectTo';

const Example = (props) => {
  return (
    <div>
      <p>
        This page is static because it does not fetch any data or include the
        authed user info.
      </p>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookiesServerSide(req.headers.cookie);

  try {
    await verifyIdToken(cookies.auth.token);
    return { props: {} };
  } catch (error) {
    return redirectTo('/', res);
  }
}

export default Example;
