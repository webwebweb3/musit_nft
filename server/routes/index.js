const express = require('express');

const router = express.Router();

const registerRouter = require('./user/register');
const loginRouter = require('./user/login');
const logoutRouter = require('./user/logout');
const authRouter = require('./user/auth');
const uploadMusicRouter = require('./uploadMusic');

const { auth } = require('../middleware/auth');

router.use('/register', registerRouter);
router.use('/auth', auth, authRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/uploadmusic', uploadMusicRouter);

module.exports = router;
