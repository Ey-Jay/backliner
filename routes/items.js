const express = require('express');
const router = express.Router({ mergeParams: true });

const { getItemsForUser } = require('../controllers/items');
const { getItemById, updateItemById } = require('../controllers/items/iid');
const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/')
  .get(getItemsForUser)
  .post(unused)
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:iid')
  .get(getItemById)
  .post(unused)
  .put(updateItemById)
  .delete();

// prettier-ignore
router
  .route('/:iid/comments')
  .get()
  .post()
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:iid/comments/:cid')
  .get()
  .post(unused)
  .put()
  .delete();

module.exports = router;
