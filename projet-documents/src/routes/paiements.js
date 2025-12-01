const express = require('express');
const router = express.Router();
const controller = require('../controllers/paiementsController');

router.post('/notify', controller.notifyPayment);
router.post('/create', controller.createPayment);

module.exports = router;
