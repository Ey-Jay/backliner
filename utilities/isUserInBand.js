const Band = require('../models/User');
const { isNil, isEmpty } = require('ramda');
const getUserIdFromAuth = require('./getUserIdFromAuth');

const isUserInBand = async (authId, bandId) => {
  try {
    const userId = await getUserIdFromAuth(authId);
    const band = await Band.findOne({ _id: bandId });

    if (!isNil(band) && !isEmpty(band) && band.members.includes(userId))
      return true;
    return false;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = isUserInBand;
