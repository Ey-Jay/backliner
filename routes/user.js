const express = require('express');
const router = express.Router();

const { getUser, updateUser, setUserInactive } = require('../controllers/user');

// prettier-ignore
router
  .route('/')
  .get(getUser)
  .post(getUser)
  .put(updateUser)
  .delete(setUserInactive);

module.exports = router;
