const express = require('express');
const router = express.Router();

const { getBands, createBand } = require('../controllers/bands');
const { getBandById, updateBand } = require('../controllers/bands/bid');
const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/')
  .get(getBands)
  .post(createBand)
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:bid')
  .get(getBandById)
  .post(unused)
  .put(updateBand)
  .delete();

// prettier-ignore
router
  .route('/:bid/:itemtype')
  .get()
  .post()
  .put(unused)
  .delete(unused);

module.exports = router;
