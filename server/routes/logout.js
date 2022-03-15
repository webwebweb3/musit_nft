const express = require('express');
const router = express.Router();

//------------------------------------------------
//               /api/logout
//------------------------------------------------

router.get('/', (req, res) => {
  req.logout();
  req.session.destroy();
  return res.status(200).json({
    loginSuccess: false,
  });
});

module.exports = router;
