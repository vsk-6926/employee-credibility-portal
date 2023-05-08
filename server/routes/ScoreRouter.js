const express = require('express');
const router = express.Router();

const ScoreController = require('../controller/ScoreController');

router.post('/get', ScoreController.getScore);

router.post('/update', ScoreController.updateScore);

module.exports = router;