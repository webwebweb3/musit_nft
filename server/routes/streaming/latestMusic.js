const express = require('express');
const router = express.Router();
const { User, Music } = require('../models');

//------------------------------------------------
//               /api/latestmusic
//------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const latestMusic = await Music.findAll({
      order: [['createdAt', 'ASC']],
    });
    console.log(latestMusic);
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

module.exports = router;
