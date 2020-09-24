const getDevUserId = (req, res, next) => {
  req.authId = '5f565843f0b5220df874ce3b';
  req.userData = { name: 'Jigglypuff' };
  next();
};

module.exports = getDevUserId;
