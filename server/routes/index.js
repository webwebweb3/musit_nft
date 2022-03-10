const express = require('express');

const router = express.Router();

const register = require('./register');

router.use('/register', register);

module.exports = router;
