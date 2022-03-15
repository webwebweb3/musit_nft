const express = require('express');
const router = express.Router();
const { User, Genre, Artist } = require('../models');

//------------------------------------------------
//               /api/register
//------------------------------------------------

router.post('/user', async (req, res) => {
  try {
    const { metamask, nationality, genre } = req.body;
    const exUser = await User.findOne({
      where: {
        metamask,
      },
    });

    if (exUser) {
      return res.json({ success: false, message: '가입된 회원입니다' });
    }

    const user = await User.create({
      metamask,
      nationality,
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

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

router.post('/artist', async (req, res) => {
  try {
    const { metamask, nationality, genre, name } = req.body;
    const exUser = await Artist.findOne({
      where: {
        metamask,
      },
    });

    if (exUser) {
      return res.json({ success: false, message: '가입된 회원입니다' });
    }

    const artist = await Artist.create({
      metamask,
      name,
      nationality,
    });

    if (genre) {
      const result = await Promise.all(
        genre.map(index => {
          return Genre.findOrCreate({
            where: { content: index },
          });
        }),
      );
      await artist.addGenre(result.map(r => r[0]));
    }

    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

module.exports = router;
