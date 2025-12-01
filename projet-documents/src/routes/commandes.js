const express = require('express');
const router = express.Router();
const controller = require('../controllers/commandesController');

router.post('/create', controller.createCommande);
router.get('/list', controller.listCommandes);
router.get('/:id', controller.getCommande);

module.exports = router;
