const express = require('express');
const router = express.Router();

//------------------------------------------------
//               /api/auth
//------------------------------------------------

router.get('/', (req, res) => {
  res.status(200).json({
    id: req.user.id,
    metamask: req.user.metamask,
    name: req.user.name,
    nationality: req.user.nationality,
    genre: req.user.genre,
    img: req.user.img,
  });
});

module.exports = router;
