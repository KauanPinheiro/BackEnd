const express = require('express');
const router = express.Router();
const ingredientesControllers = require('../controllers/ingredientesController');

router.use('/', ingredientesControllers);

module.exports = router;