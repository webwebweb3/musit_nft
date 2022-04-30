const express = require('express');
const { User, Genre, Music } = require('../../models');

const router = express.Router();

//------------------------------------------------
//               /api/user
//------------------------------------------------

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const UserInfo = await User.findOne({
        where: { metamask: req.user.metamask },
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

      res.status(200).json(UserInfo);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
