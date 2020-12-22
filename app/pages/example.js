import Link from 'next/link';

import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';

const Example = ({ userData }) => {
  return (
    <div>
      <p>{JSON.stringify(userData)}</p>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookiesServerSide(req.headers.cookie);

  try {
    const user = await verifyIdToken(cookies.auth.token);

    // do DB stuff here and return as props to component

    return { props: { userData: user } };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default Example;
