const express = require('express');
const router = express.Router();

const { getUser, updateUser, setUserInactive } = require('../controllers');

// prettier-ignore
router
  .route('/')
  .get(getUser)
  .post(getUser)
  .put(updateUser)
  .delete(setUserInactive);

router.use('/', require('./calendar'));
router.use('/bands', require('./bands'));
router.use('/:itemtype', require('./items'));

module.exports = router;
