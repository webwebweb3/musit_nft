const express = require('express');

const router = express.Router();
const { QueryTypes } = require('sequelize');
const { User, sequelize } = require('../../models');

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
    console.log('isExistResult', isExistResult);
    if (isExistResult.length !== 0) {
      res.json({ exist: true });
    } else {
      res.json({ exist: false });
    }
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const { editionNum, userMetamask } = req.body;
    console.log('edition', editionNum);
    console.log('userMetamask', userMetamask);
    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const insertSql = `INSERT INTO musiclikes (user, music) VALUE (${userId.id}, ${editionNum});`;
    const inserting = await sequelize.query(insertSql, {
      type: QueryTypes.INSERT,
    });
    console.log('인설팅', inserting);
    res.json({ likeSuccess: true });
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

    console.log('editionNum', editionNum);
    console.log('userMetamask', userMetamask);

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    console.log('내 아이디', userId.id);
    const deleteSql = `DELETE FROM musiclikes WHERE user =${userId.id} AND music = ${editionNum};`;
    const deletequery = await sequelize.query(deleteSql, {
      type: QueryTypes.DELETE,
    });
    console.log('딜리트 쿼리', deletequery);
    res.json({ delete: true });
  } catch (error) {
    res.json({ delete: false });
    console.error(error);
  }
});

module.exports = router;
