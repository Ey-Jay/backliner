const unused = (req, res, next) => {
  res.status(404);
  res.json({
    success: false,
    action: null,
    data: null,
  });
};

module.exports = unused;
