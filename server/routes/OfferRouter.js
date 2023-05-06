const express = require('express');
const router = express.Router();

const createOffer = require('../controller/OfferController/OfferController');
const getOffers = require('../controller/OfferController/EmployeeOffers');

router.post('/create', createOffer);
router.get('/get', getOffers);

module.exports = router;