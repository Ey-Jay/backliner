const Band = require('../../models/Band');
const isUserInBand = require('../../utilities/isUserInBand');

const getMembersFromBand = async (req, res, next) => {
  try {
    const { authId } = req;
    const { bid } = req.params;

    if (isUserInBand(authId, bid)) {
      const band = await Band.findById(bid)
        .populate('members', 'name avatar active')
        .exec();

      res.status(200);
      res.json({
        success: true,
        action: 'get',
        data: band.members,
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

module.exports = { getMembersFromBand };
