const express = require('express');
const router = express.Router();

const { getBands, getBandById } = require('../controllers/bands');

// prettier-ignore
router
  .route('/')
  .get(getBands)
// .post()
// .put()
// .delete();

// prettier-ignore
router
  .route('/:id')
  .get(getBandById)

module.exports = router;
