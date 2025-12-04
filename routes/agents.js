const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/agents');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.put('/:id', ctrl.update);

module.exports = router;
