const express = require('express');

const router = express.Router();
// const { User, Music } = require('../models');

//------------------------------------------------
//               /api/latestmusic
//------------------------------------------------
router.put('/', async (req, res) => {
  try {
    console.log('req,', req);
    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
