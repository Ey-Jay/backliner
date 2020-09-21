const express = require('express');
const router = express.Router({ mergeParams: true });

const { getItemsForUser } = require('../controllers/items');
const {
  getItemById,
  updateItemById,
  setItemInactive,
} = require('../controllers/items/iid');
const { getComments, createComment } = require('../controllers/items/comments');
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
  .delete(setItemInactive);

// prettier-ignore
router
  .route('/:iid/comments')
  .get(getComments)
  .post(createComment)
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
