const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { User, Artist } = require('../models');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'metamask',
        passwordField: 'password',
      },
      async (metamask, password, done) => {
        try {
          const exUser = await User.findOne({ where: { metamask } });
          if (exUser) {
            done(null, exUser);
          } else {
            const exArtist = await Artist.findOne({ where: { metamask } });
            if (exArtist) {
              done(null, exArtist);
            } else {
              console.log(111);
              done(null, false, { message: '가입되지 않은 회원입니다' });
            }
          }
        } catch (error) {
          console.log(error);
          done(error);
        }
      },
    ),
  );
};
