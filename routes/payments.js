const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/payments');

router.post('/', ctrl.create);
router.post('/notify', ctrl.notify);
router.get('/:id', ctrl.get);

module.exports = router;
