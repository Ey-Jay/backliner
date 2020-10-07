const express = require('express');
const router = express.Router();

const { getCalendar, addEventCalendar } = require('../controllers/oauth');

// prettier-ignore
router
  .route('/:bid/calendar')
  .get(getCalendar)
  .post(addEventCalendar)

module.exports = router;
