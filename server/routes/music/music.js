const express = require('express');

const router = express.Router();
const { QueryTypes } = require('sequelize');
const { User, sequelize, Music } = require('../../models');

//------------------------------------------------
//               /api/music
// //------------------------------------------------

router.get('/', async (req, res) => {
  try {
    const { paramsData } = req.query;
    const jsonData = JSON.parse(paramsData);
    const { editionNum, userMetamask } = jsonData;

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });

    const isExistSql = `SELECT * FROM musiclikes WHERE user=${userId.id} AND music=${editionNum};`;
    const isExistResult = await sequelize.query(isExistSql, {
      type: QueryTypes.SELECT,
    });
    if (isExistResult.length !== 0) {
      res.json({ exist: true, editionNum });
    } else {
      res.json({ exist: false, editionNum });
    }
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const { editionNum, userMetamask } = req.body;
    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const dateNow = new Date();
    const date = `${dateNow.toISOString().split('T')[0]} ${
      dateNow.toTimeString().split(' ')[0]
    }`;
    const insertSql = `INSERT INTO musiclikes (createdAt, user, music) VALUE ('${date}',${userId.id}, ${editionNum});`;
    await sequelize.query(insertSql, {
      type: QueryTypes.INSERT,
    });

    res.json({ likeSuccess: true, editionNum });
  } catch (error) {
    res.json({ likeSuccess: false });
    console.error(error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const { paramsData } = req.query;
    const jsonData = JSON.parse(paramsData);
    const { editionNum, userMetamask } = jsonData;

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const deleteSql = `DELETE FROM musiclikes WHERE user =${userId.id} AND music = ${editionNum};`;
    await sequelize.query(deleteSql, {
      type: QueryTypes.DELETE,
    });
    res.json({ delete: true, editionNum });
  } catch (error) {
    res.json({ delete: false });
    console.error(error);
  }
});

router.post('/favoritemusic', async (req, res) => {
  try {
    const { userMetamask } = req.body;

    const userId = await User.findOne({
      where: { metamask: userMetamask },
      include: [
        {
          model: Music,
          attributes: ['id'],
        },
      ],
    });

    res.status(200).json(userId);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
