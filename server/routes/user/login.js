const express = require('express');

const router = express.Router();
const passport = require('passport');
const { User, Genre, Music } = require('../../models');

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
      return res.status(400).send(info);
    }

    return req.login(user, async loginErr => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const UserInfo = await User.findOne({
        where: { metamask: user.metamask },
        attributes: {
          exclude: ['id', 'updatedAt', 'deletedAt'],
        },
        include: [
          {
            model: Genre,
            attributes: ['content'],
          },
          {
            model: Music,
            as: 'user',
            attributes: ['title', 'uploader', 'albumCover', 'IPFSUrl'],
            include: [
              {
                model: User,
                attributes: ['metamask', 'name'],
              },
            ],
          },
        ],
      });

      return res.status(200).json(UserInfo);
    });
  })(req, res, next);
});

module.exports = router;
