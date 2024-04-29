const express = require('express');
const router = express.Router();
const receitasControllers = require('../controllers/receitasController');

router.use('/', receitasControllers);

module.exports = router;