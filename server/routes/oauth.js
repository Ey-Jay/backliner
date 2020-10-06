const express = require('express');
const router = express.Router();

const { getAuthUrl, getTokens } = require('../controllers/oauth');

// prettier-ignore
router
  .route('/')
  .get(getAuthUrl)
  .post(getTokens)

module.exports = router;
