const express = require('express');
const router = express.Router();

//------------------------------------------------
//               /api/logout
//------------------------------------------------

router.post('/', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
