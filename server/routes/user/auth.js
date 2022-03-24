const express = require('express');
const { User, Genre } = require('../../models');
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
        include: {
          model: Genre,
          attributes: ['content'],
        },
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
