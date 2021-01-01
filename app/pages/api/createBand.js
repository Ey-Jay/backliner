import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withAuthAndDb from '@middleware/withAuthAndDb';
import getDbUser from '@utils/db/getDbUser';
import Band from '@models/Band';

const createBand = async (req, res) => {
  try {
    if (req.method !== 'POST') throw new Error('Wrong method');
    // Middleware
    await withAuthAndDb(req, verifyIdToken);

    // DB
    await Band.create({
      name: req.body?.name || 'Untitled Band',
      owner: req.dbUser._id,
      members: [req.dbUser._id],
      avatar: 1,
      active: true,
    });
    req.dbUser = await getDbUser(req.fbUser);

    // Response
    return res.status(200).json(req.dbUser);
  } catch (error) {
    return res.status(401).send('You are unauthorised.');
  }
};

export default createBand;
