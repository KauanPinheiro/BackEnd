const express = require('express');
const router = express.Router();
const quantidadesController = require('../controllers/quantidadesController');

router.use('/', quantidadesController);

module.exports = router;