import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import dbConnect from '@utils/dbConnect';
import getDbUser from '@utils/getDbUser';

const getUser = async (req, res) => {
  const token = req.headers.token;

  try {
    const fbUser = await verifyIdToken(token);

    await dbConnect();
    const dbUser = await getDbUser(fbUser);
    return res.status(200).json({
      db: dbUser,
      fb: fbUser,
    });
  } catch (error) {
    return res.status(401).send('You are unauthorised');
  }
};

export default getUser;
