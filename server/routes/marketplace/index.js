const express = require('express');
const router = express.Router();
const { User } = require('../../models');

//------------------------------------------------
//               /api/marketplace
//------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const { userAccount } = req.query;

    const user = await User.findOne({
      where: { metamask: userAccount },
    });
    if (user) {
      return res.json({ userName: user.name });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
