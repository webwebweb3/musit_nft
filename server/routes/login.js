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
      res.json({ loginSuccess: false });
    }
    if (info) {
      return res.json({ loginSuccess: false, info });
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return res.json({ loginSuccess: false });
      }
      return res.json({
        loginSuccess: true,
        userData: {
          img: user.img,
          name: user.name,
          metamask: user.metamask,
          nationality: user.nationality,
          pass: user.pass,
          createdAt: user.createdAt,
          role: user.role,
        },
      });
    });
  })(req, res, next);
});

module.exports = router;
