const express = require('express');
const router = express.Router();

const { getBands } = require('../controllers/bands');
const { getBandById } = require('../controllers/bid');
const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/')
  .get(getBands)
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:bid')
  .get(getBandById)
  .post(unused)
  .put()
  .delete();

// prettier-ignore
router
  .route('/:bid/:itemtype')
  .get()
  .post()
  .put(unused)
  .delete(unused);

module.exports = router;
