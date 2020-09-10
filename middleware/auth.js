const admin = require('../authInit');

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      req.authToken = req.headers.authorization.split(' ')[1];
    } else {
      req.authToken = null;
    }

    const userInfo = await admin.auth().verifyIdToken(req.authToken);

    req.authId = userInfo.uid;
    req.userData = userInfo;

    return next();
  } catch (e) {
    console.log(e);
    return res
      .status(401)
      .send({ error: 'You are not authorized to make this request' });
  }
};

module.exports = checkIfAuthenticated;
