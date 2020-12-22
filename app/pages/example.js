import Link from 'next/link';

import dbConnect from '@utils/dbConnect';
import User from '@models/User';

import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';

const Example = ({ dbUser }) => {
  return (
    <div>
      <p>{JSON.stringify(dbUser)}</p>
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

    await dbConnect();
    const data = await User.find({ auth_token: user.uid }, User.publicFields())
      .populate({
        path: 'bands',
        select: Band.publicFields(),
        match: { active: true },
        populate: {
          path: 'members',
          select: User.publicFields(),
          match: { active: true },
        },
      })
      .exec();
    const parsed = JSON.parse(JSON.stringify(data));

    return { props: { dbUser: parsed } };
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
