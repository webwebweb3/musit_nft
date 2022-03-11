const express = require('express');
const router = express.Router();
const User = require('../models/user');

//------------------------------------------------
//               /api/register
//------------------------------------------------

router.post('/', async (req, res) => {
  try {
    const { metamask, nationality, genre } = req.body;
    const exUser = await User.findOne({
      where: {
        metamask,
      },
    });

    if (exUser) {
      return res.json({ success: false });
    }

    await User.create({
      metamask,
      nationality,
      genre,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

module.exports = router;
