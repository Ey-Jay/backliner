import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import withAuthAndDb from '@middleware/withAuthAndDb';
import getDbUser from '@utils/db/getDbUser';
import Band from '@models/Band';

const validateReq = async (req) => {
  // Auth Middleware
  await withAuthAndDb(req, verifyIdToken);

  // Data validation
  const issues = [];

  if (req.method !== 'POST') issues.push('Method not accepted');

  if (!req.body) issues.push('No request body');

  if (!req.body?.name) issues.push('No band name provided');

  if (req.body?.name && req.body.name.length > 30)
    issues.push('Name is too long (Max 30 characters)');

  // Error handler
  if (issues.length) {
    const error = new Error(issues.join('. '));
    error.statusCode = 400;

    throw error;
  }
};

const createBand = async (req, res) => {
  try {
    await validateReq(req);

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
    return res
      .status(error.statusCode || 401)
      .send(error.message || 'You are unauthorised.');
  }
};

export default createBand;
