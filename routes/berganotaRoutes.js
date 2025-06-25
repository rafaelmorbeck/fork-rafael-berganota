const express = require('express');
const routes = express.Router();
const berganotaController = require('../controller/berganotaController');

router.get('/', berganotaController.getLogin);

module.exports = router;
