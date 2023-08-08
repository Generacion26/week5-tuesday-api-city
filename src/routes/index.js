const express = require('express');
const routerCity = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/cities', routerCity)

module.exports = router;