const express = require('express');
const router = express.Router();

const { getUser, updateUser, setUserInactive } = require('../controllers');
const { getBands } = require('../controllers/bands');
const { getBandById } = require('../controllers/bid');
const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/')
  .get(getUser)
  .post(getUser)
  .put(updateUser)
  .delete(setUserInactive);

// prettier-ignore
router
  .route('/bands')
  .get(getBands)
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/bands/:bid')
  .get(getBandById)
  .post(unused)
  .put()
  .delete();

// prettier-ignore
router
  .route('/bands/:bid/:itemtype')
  .get()
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/bands/:bid/:itemtype/:iid')
  .get()
  .post(unused)
  .put()
  .delete();

// prettier-ignore
router
  .route('/bands/:bid/:itemtype/:iid/comments')
  .get()
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/bands/:bid/:itemtype/:iid/comments/:cid')
  .get()
  .post(unused)
  .put()
  .delete();

module.exports = router;
