const express = require('express');

const router = express.Router();

const registerRouter = require('./user/register');
const loginRouter = require('./user/login');
const logoutRouter = require('./user/logout');
const userEditRouter = require('./user/userEdit');
const authRouter = require('./user/auth');
const uploadMusicRouter = require('./uploadMusic');
const marketplace = require('./marketplace');
const studio = require('./studio/studio');

const { isLoggedIn } = require('../middleware/auth');

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/useredit', isLoggedIn, userEditRouter);
router.use('/user', authRouter);
router.use('/marketplace', marketplace);
router.use('/studio', studio);

router.use('/uploadmusic', uploadMusicRouter);

module.exports = router;
