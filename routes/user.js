const express = require('express');
const router = express.Router();

const { getUser } = require('../controllers/user');

// prettier-ignore
router
  .route('/')
  .get(getUser);

module.exports = router;
