const express = require('express');
const router = express.Router();
const avaliacoesControllers = require('../controllers/avaliacoesController');

router.use('/', avaliacoesControllers);

module.exports = router;