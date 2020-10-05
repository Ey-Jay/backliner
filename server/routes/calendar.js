const express = require('express');
const router = express.Router();

const { getCalendar } = require('../controllers/oauth');

// prettier-ignore
router
  .route('/:bid/calendar')
  .get(getCalendar)

module.exports = router;
