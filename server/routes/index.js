const express = require('express');

const router = express.Router();

const registerRouter = require('./register');
const loginRouter = require('./login');
const authRouter = require('./auth');

const { auth } = require('../middleware/auth');

router.use('/register', registerRouter);
router.use('/auth', auth, authRouter);
router.use('/login', loginRouter);

module.exports = router;
