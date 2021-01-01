import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withAuthAndDb from '@middleware/withAuthAndDb';

const getUser = async (req, res) => {
  try {
    // Middleware
    await withAuthAndDb(req, verifyIdToken);

    // Response
    return res.status(200).json({
      db: req.dbUser,
      fb: req.fbUser,
    });
  } catch (error) {
    return res.status(401).send('You are unauthorised');
  }
};

export default getUser;
