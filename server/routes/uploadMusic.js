const express = require('express');
const router = express.Router();
const { Artist } = require('../models');
console.log('라우터 밖');
//------------------------------------------------
//               /api/uploadmusic
//------------------------------------------------
router.get('/:id', async (req, res) => {
  try {
    const user = req.params.id;
    console.log('user', user);
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
    const { a } = req.body;
    console.log(a);
    return res.json({ uploadSuccess: true });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
