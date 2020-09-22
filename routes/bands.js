const express = require('express');
const router = express.Router();

const { getBands, createBand } = require('../controllers/bands');
const {
  getBandById,
  updateBand,
  setBandInactive,
} = require('../controllers/bands/bid');
const { getItemsByBand, createItem } = require('../controllers/bands/items');
const {
  getMembersFromBand,
  addMemberToBand,
  removeMemberFromBand,
} = require('../controllers/bands/members');
const unused = require('../controllers/unused');

// prettier-ignore
router
  .route('/')
  .get(getBands)
  .post(createBand)
  .put(unused)
  .delete(unused);

// prettier-ignore
router
  .route('/:bid')
  .get(getBandById)
  .post(unused)
  .put(updateBand)
  .delete(setBandInactive);

// prettier-ignore
router
  .route('/:bid/members')
  .get(getMembersFromBand)
  .post(addMemberToBand)
  .put(unused)
  .delete(removeMemberFromBand);

// prettier-ignore
router
  .route('/:bid/:itemtype')
  .get(getItemsByBand)
  .post(createItem)
  .put(unused)
  .delete(unused);

module.exports = router;
