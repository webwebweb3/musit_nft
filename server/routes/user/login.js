const express = require('express');
const router = express.Router();
const passport = require('passport');

//------------------------------------------------
//               /api/login
//------------------------------------------------

router.post('/', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log(user);
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log(66666666666);
      console.log(info);
      console.log(66666666666);
      return res.status(400).send('이미 사용 중입니다.');
    }
    return req.login(user, loginErr => {
      console.log('user');
      console.log(user.name);
      console.log(user.metamask);
      console.log('user');
      if (loginErr) {
        console.log(232323);
        console.error(loginErr);
        return next(loginErr);
      }
      // 성공 반환을 안하고 자꾸 에러로 가는 중...
      return res.status(200).json({
        success: true,
      });
    });
  })(req, res, next);
});

module.exports = router;
