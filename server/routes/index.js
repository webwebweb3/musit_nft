const express = require('express');

const router = express.Router();

const registerRouter = require('./user/register');
const loginRouter = require('./user/login');
const logoutRouter = require('./user/logout');
const userEditRouter = require('./user/userEdit');
const uploadMusicRouter = require('./uploadMusic');

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/useredit', userEditRouter);

router.use('/uploadmusic', uploadMusicRouter);

module.exports = router;
