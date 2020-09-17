const express = require('express');
const router = express.Router();

const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/:itemtype')
  .get()
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:itemtype/:iid')
  .get()
  .post(unused)
  .put()
  .delete();

// prettier-ignore
router
  .route('/:itemtype/:iid/comments')
  .get()
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:itemtype/:iid/comments/:cid')
  .get()
  .post(unused)
  .put()
  .delete();

module.exports = router;
