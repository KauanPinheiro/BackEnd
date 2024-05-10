const express = require('express');
const router = express.Router();
const medidasController = require('../controllers/medidasController');

router.use('/', medidasController);

module.exports = router;