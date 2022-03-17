const express = require('express');
const router = express.Router();
const passport = require('passport');

//------------------------------------------------
//               /api/login
//------------------------------------------------

router.post('/', async (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.status(200).json({
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
