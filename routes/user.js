const express = require('express');
const router = express.Router();

const { getUser, postUser } = require('../controllers/user');

// prettier-ignore
router
  .route('/create')
  .post(postUser);

// prettier-ignore
router
  .route('/')
  .get(getUser);

module.exports = router;
