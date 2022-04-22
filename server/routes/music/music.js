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
    console.log('---------------------------------------');
    console.log(userMetamask);
    console.log('---------------------------------------');

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });

    const isExistSql = `SELECT * FROM musiclikes WHERE user=${userId.id} AND music=${editionNum};`;
    const isExistResult = await sequelize.query(isExistSql, {
      type: QueryTypes.SELECT,
    });
    console.log('isExistResult', isExistResult);
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
    console.log('edition', editionNum);
    console.log('userMetamask', userMetamask);
    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const insertSql = `INSERT INTO musiclikes (user, music) VALUE (${userId.id}, ${editionNum});`;
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
    res.json({ delete: true, editionNum });
  } catch (error) {
    res.json({ delete: false });
    console.error(error);
  }
});

module.exports = router;
