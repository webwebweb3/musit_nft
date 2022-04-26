const express = require('express');
const { User } = require('../../models');

const router = express.Router();

//------------------------------------------------
//               /api/subscribe
//------------------------------------------------
router.put('/', async (req, res) => {
  try {
    const { data, metamask } = req.body;
    await User.update({ subscription: data }, { where: { metamask } });
    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
