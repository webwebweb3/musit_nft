const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
