const Band = require('../models/Band');
const isUserInBand = require('../utilities/isUserInBand');

const getBandById = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

    const band = await Band.findOne({ _id: bid }, 'name members avatar owner')
      .populate('owner', 'name avatar active')
      .populate('members', 'name avatar active')
      .exec();

    if (isUserInBand(authId, bid)) {
      res.status(200);
      res.json({
        success: true,
        action: 'get',
        data: band,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'get',
        data: null,
        error: true,
        message: 'Permission denied',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { getBandById };
