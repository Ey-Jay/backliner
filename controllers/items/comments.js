const Comments = require('../../models/Comments');
const isUserInBand = require('../../utilities/isUserInBand');

const getComments = async (req, res, next) => {
  try {
    const { authId } = req;
    const { iid } = req.params;

    const comments = await Comments.find({ parent_id: iid })
      .populate('parent_id')
      .exec();

    console.log(comments);

    if (isUserInBand(authId, comments[0].parent_id.band)) {
      res.json({
        success: true,
        action: 'update',
        data: comments,
      });
    } else {
      res.status(401);
      res.json({
        success: false,
        action: 'update',
        data: null,
        error: true,
        message: 'Not authorized',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getComments,
};
