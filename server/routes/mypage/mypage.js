const express = require('express');

const router = express.Router();
const { QueryTypes } = require('sequelize');
const { User, sequelize } = require('../../models');

//------------------------------------------------
//               /api/mypage
//------------------------------------------------
router.get('/getArtists', async (req, res) => {
  try {
    const { userMetamask } = req.query;

    const exUser = await User.findOne({
      where: { metamask: userMetamask },
    });

    const findFollowings = `SELECT user.id, user.metamask, user.name, user.img FROM users AS user INNER JOIN subscribe AS sub ON user.id = sub.subscribing WHERE sub.subscribers = ${exUser.id}; `;
    const findFollowingsResult = await sequelize.query(findFollowings, {
      type: QueryTypes.SELECT,
    });

    res.json(findFollowingsResult);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
