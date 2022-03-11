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
      res.status(401).json({ loginSuccess: false });
    }
    if (info) {
      return res.status(401).json({ loginSuccess: false, info });
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return res.status(400).json({ loginSuccess: false });
      }
      return res
        .status(200)
        .json({ loginSuccess: true, userId: user.metamask });
    });
  })(req, res, next);
});

module.exports = router;
