const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosController');

router.use('/', usuariosControllers);

module.exports = router;