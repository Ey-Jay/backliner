import dbConnect from '@utils/db/dbConnect';
import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import getDbUser from '@utils/db/getDbUser';

// We can't import verifyIdToken from firebase directly because of a library bug
// https://github.com/firebase/firebase-functions/issues/597
const withAuthAndDb = async (req, verifyToken) => {
  await dbConnect();
  req.authToken = parseCookiesServerSide(req.headers.cookie).auth.token;
  req.fbUser = await verifyToken(req.authToken);
  req.dbUser = await getDbUser(req.fbUser);
};

export default withAuthAndDb;
