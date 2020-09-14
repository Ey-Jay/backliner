const R = require('ramda');
const Band = require('../models/Band');
const getUserIdFromAuth = require('../utilities/getUserIdFromAuth');

const getBands = async (req, res, next) => {
  try {
    const { authId } = req;

    const userId = await getUserIdFromAuth(authId);

    const bands = await Band.find({ members: userId }, '_id name avatar owner');

    res.json({
      success: true,
      action: 'get',
      data: bands,
    });
  } catch (e) {
    next(e);
  }
};

const getBandById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { id } = req.params;

    const userId = await getUserIdFromAuth(authId);

    const band = await Band.findOne(
      { _id: id },
      '_id name members avatar owner'
    );

    if (!R.isEmpty(band) && !R.isNil(band) && !band.members.includes(userId))
      res.json({
        success: false,
        action: 'get',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    else
      res.json({
        success: true,
        action: 'get',
        data: band,
      });
  } catch (e) {
    next(e);
  }
};

module.exports = { getBands, getBandById };
