const Band = require('../../models/Band');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');

const getBands = async (req, res, next) => {
  try {
    const { authId } = req;

    const userId = await getUserIdFromAuth(authId);
    const bands = await Band.find(
      { members: userId },
      'name avatar members owner'
    )
      .populate('owner', 'name avatar active')
      .populate('members', 'name avatar active')
      .exec();

    res.status(200);
    res.json({
      success: true,
      action: 'get',
      data: bands,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getBands };
