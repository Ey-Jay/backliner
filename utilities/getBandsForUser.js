const Band = require('../models/Band');

const getBandsForUser = async (uid) => {
  const rawBands = await Band.find({ members: uid }, '_id');
  return rawBands.map((obj) => obj._id);
};

module.exports = getBandsForUser;
