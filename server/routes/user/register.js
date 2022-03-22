const express = require('express');
const router = express.Router();
const { User, Genre } = require('../../models');

//------------------------------------------------
//               /api/register
//------------------------------------------------

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const { metamask, nationality, genre, name, role } = req.body;
    const exUser = await User.findOne({
      where: {
        metamask,
      },
    });

    if (exUser) {
      return res.status(400).send('이미 사용 중입니다.');
    }

    const user = await User.create({
      metamask,
      name,
      nationality,
      role,
    });

    if (genre) {
      const result = await Promise.all(
        genre.map(index => {
          return Genre.findOrCreate({
            where: { content: index },
          });
        }),
      );
      await user.addGenre(result.map(r => r[0]));
    }

    return res.status(200).json('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
