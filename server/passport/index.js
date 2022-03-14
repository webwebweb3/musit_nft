const passport = require('passport');
const local = require('./local');
const { User, Artist } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
    })
      .then(user => done(null, user))
      .catch(() => {
        Artist.findOne({
          where: { id },
        })
          .then(user => done(null, user))
          .catch(err => done(err));
      });
  });
  local();
};
