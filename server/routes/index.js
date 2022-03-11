const express = require('express');

const router = express.Router();

const register = require('./register');
const login = require('./login');
const auth = require('./auth');

router.use('/register', register);
router.use('/auth', auth);
router.use('/login', login);

module.exports = router;
