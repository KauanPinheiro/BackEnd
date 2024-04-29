const express = require('express');
const router = express.Router();
const clientesControllers = require('../controllers/clientesController');

router.use('/', clientesControllers);

module.exports = router;