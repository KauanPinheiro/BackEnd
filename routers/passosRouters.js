const express = require('express');
const router = express.Router();
const passosController = require('../controllers/passosController')

router.use('/', passosController);

module.exports = router;