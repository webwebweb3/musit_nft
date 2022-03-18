const express = require('express');
const router = express.Router();
const passport = require('passport');

//------------------------------------------------
//               /api/login
//------------------------------------------------

router.post('/', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(400).send('이미 사용 중입니다.');
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.json({
        img: user.img,
        name: user.name,
        metamask: user.metamask,
        nationality: user.nationality,
        pass: user.pass,
        createdAt: user.createdAt,
        role: user.role,
      });
    });
  })(req, res, next);
});

module.exports = router;
