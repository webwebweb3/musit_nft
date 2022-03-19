const express = require('express');
const router = express.Router();
const { User, Music, MusicLike, MusicPlayTime } = require('../models');

//------------------------------------------------
//               /api/uploadmusic
//------------------------------------------------
router.get('/:id', async (req, res) => {
  try {
    const user = req.params.id;
    const exUser = await User.findOne({
      where: {
        metamask: user,
      },
    });
    if (exUser) {
      return res.json({ userName: exUser.dataValues.name });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    let {
      userName,
      title,
      artist,
      albumName,
      genre,
      release,
      songwriter,
      lyricist,
    } = req.body;
    if (albumName === '') {
      albumName = null;
    }
    if (genre === '') {
      genre = null;
    }
    if (release === '') {
      release = null;
    }
    if (songwriter === '') {
      songwriter = null;
    }
    if (lyricist === '') {
      lyricist = null;
    }

    if (title === '' || title === null || artist === '' || artist === null) {
      res.json({
        uploadSuccess: 'empty',
        message: 'Input data is empty',
      });
      return;
    }

    if (userName !== artist) {
      res.json({
        uploadSuccess: 'authFail',
        message: 'This user is not that artist',
      });
      return;
    }

    const exUser = await User.findOne({
      where: {
        name: artist,
      },
    });
    console.log(exUser);

    const postMusic = await Music.create({
      title,
      uploader: exUser.dataValues.id,
      albumName,
      release,
      songwriter,
      lyricist,
      genre,
    });

    await MusicLike.create({
      likes: 0,
      musicId: postMusic.dataValues.id,
    });
    await MusicPlayTime.create({
      playtime: 0,
      musicId: postMusic.dataValues.id,
    });
    return res.json({ uploadSuccess: 'true' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
