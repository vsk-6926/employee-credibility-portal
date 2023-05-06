const express = require('express');
const router = express.Router();

const ScoreController = require('../controller/ScoreController');

router.get('/', ScoreController.getScore);

router.post('/', ScoreController.updateScore);

module.exports = router;