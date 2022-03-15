const express = require('express');
const router = express.Router();
const { Artist, Music } = require('../models');

//------------------------------------------------
//               /api/uploadmusic
//------------------------------------------------
router.get('/:id', async (req, res) => {
  try {
    const user = req.params.id;
    const exUser = await Artist.findOne({
      where: {
        metamask: user,
      },
    });
    if (exUser) {
      return res.json({ artistName: exUser.dataValues.name });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, artist, albumName, release, songwriter, lyricist, genre } =
      req.body;
    await Music.create({
      title,
      artist,
      albumName,
      release,
      songwriter,
      lyricist,
      genre,
    });

    return res.json({ uploadSuccess: true });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
