const express = require('express');

const router = express.Router();

const registerRouter = require('./register');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const authRouter = require('./auth');
const uploadMusicRouter = require('./uploadMusic');

const { auth } = require('../middleware/auth');

router.use('/register', registerRouter);
router.use('/auth', auth, authRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/uploadmusic', uploadMusicRouter);

module.exports = router;
