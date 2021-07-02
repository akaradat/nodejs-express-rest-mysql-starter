const express = require('express');
const praviteRouter = require('./private');
const publicRouter = require('./public');

const router = express.Router();

// router.use('/', praviteRouter);
// router.use('/', publicRouter);

const mainController = require('../controllers/mainController');

// set cookies to session
router.get('/transactions', mainController.transactionGet);

router.post('/transactions', mainController.transactionInsert);

module.exports = router;
