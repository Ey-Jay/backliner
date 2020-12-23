import Link from 'next/link';

import dbConnect from '@utils/dbConnect';
import getDbUser from '@utils/getDbUser';

import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';

const Example = ({ dbUser, fbUser }) => {
  return (
    <div>
      <p>{JSON.stringify(dbUser)}</p>
      <p>{JSON.stringify(fbUser)}</p>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  try {
    await dbConnect();

    // Validate user and get their data from FB and DB
    const cookies = parseCookiesServerSide(req.headers.cookie);
    const fbUser = await verifyIdToken(cookies.auth.token);
    const dbUser = await getDbUser(fbUser);

    return { props: { dbUser, fbUser } };
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

export default Example;
