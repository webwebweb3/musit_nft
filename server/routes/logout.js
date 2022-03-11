const express = require('express');
const router = express.Router();

//------------------------------------------------
//               /api/logout
//------------------------------------------------

router.get('/', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
