const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/auth');

router.post('/login', ctrl.login);
router.post('/register', ctrl.register);

module.exports = router;
