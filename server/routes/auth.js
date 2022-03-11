const express = require('express');
const router = express.Router();

//------------------------------------------------
//               /api/auth
//------------------------------------------------

router.get('/', (req, res) => {
  res.status(200).json({});
});

module.exports = router;
