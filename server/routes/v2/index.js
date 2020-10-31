const express = require('express');
const router = express.Router();

const getUser = require('../../controllers/v2/user/getUser');

// prettier-ignore
router
  .route('/')
  .get(getUser);

module.exports = router;
