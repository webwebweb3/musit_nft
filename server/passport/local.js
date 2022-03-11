const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          if (exUser) {
            done(null, exUser);
          } else {
            done(null, false, { message: '가입되지 않은 회원입니다' });
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      },
    ),
  );
};
