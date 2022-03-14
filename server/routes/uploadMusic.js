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
    console.log('ex?', exUser);
    if (exUser) {
      return res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
  }
});

// router.post('/', async (req, res) => {
//   try {
//     // const
//   } catch (error) {}
// });

module.exports = router;
