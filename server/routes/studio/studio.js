const express = require('express');

const router = express.Router();
const { QueryTypes } = require('sequelize');
const { User, UserCover, sequelize } = require('../../models');

//------------------------------------------------
//               /api/studio
//------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const { userName } = req.query;

    const userId = await User.findOne({
      where: { name: userName },
    });

    if (userId === null) {
      res.status(404).send('없는 페이지입니다.');
    }
    const userProfile = userId.img;

    const userCover = await UserCover.findOne({
      where: { user: userId.id },
    });

    if (userCover === null) {
      res.json({ userProfile, userCover });
    } else {
      const userBackground = userCover.backgroundImg;
      res.json({ userProfile, userBackground });
    }
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const { backgroundFileName, userMetamask } = req.body;
    const fileName = backgroundFileName.uploadFileName;

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const isExist = await UserCover.findOne({
      where: { user: userId.id },
    });

    if (isExist === null) {
      await UserCover.create({
        user: userId.id,
        backgroundImg: fileName,
      });
    } else {
      await UserCover.update(
        { backgroundImg: fileName },
        { where: { user: userId.id } },
      );
    }
    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
  }
});

router.get('/getMusics', async (req, res) => {
  try {
    const { userName } = req.query;

    const userId = await User.findOne({
      where: { name: userName },
    });

    if (userId === null) {
      res.status(404).send('없는 페이지입니다.');
    }
    const userMetamask = userId.metamask;

    res.json({ user: userMetamask });
  } catch (error) {
    console.error(error);
  }
});

router.get('/isSubscribe', async (req, res) => {
  try {
    const { paramsData } = req.query;
    const jsonData = JSON.parse(paramsData);
    const myMetamask = jsonData.metamask;
    const { artistName } = jsonData;
    const artistId = await User.findOne({
      where: { name: artistName },
    });

    const userId = await User.findOne({
      where: { metamask: myMetamask },
      include: [
        {
          model: User,
          as: 'subscribers',
          attributes: ['id'],
          // 내가 해당 유저 팔로우 하고 있는지?
          // through: {
          //   where: {
          //     subscribing: artistId.id,
          //   },
          // },
        },
      ],
      attributes: ['id', 'name', 'metamask'],
    });

    const countFollowers = `SELECT COUNT(*) as cntFollower FROM subscribe WHERE subscribing = ${artistId.id} `;
    const countFollowersResult = await sequelize.query(countFollowers, {
      type: QueryTypes.SELECT,
    });

    let tempData = {
      isSubscribing: false,
      cntFollower: countFollowersResult[0].cntFollower,
    };
    for (let i = 0; i < userId.subscribers.length; i += 1) {
      if (userId.subscribers[i].dataValues.id === artistId.id) {
        tempData = {
          isSubscribing: true,
          artistId: artistId.id,
          cntFollower: countFollowersResult[0].cntFollower,
        };
        break;
      }
    }

    if (tempData.isSubscribing === true) {
      res.json(tempData);
    }

    if (tempData.isSubscribing === false) {
      res.json({
        isSubscribing: false,
        artistId: artistId.id,
        cntFollower: countFollowersResult[0].cntFollower,
      });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const { artistId, myMetamask } = req.body;

    const myId = await User.findOne({
      where: { metamask: myMetamask },
    });

    const isExistSql = `SELECT * FROM subscribe WHERE subscribers=${myId.id} AND subscribing=${artistId};`;
    const isExistResult = await sequelize.query(isExistSql, {
      type: QueryTypes.SELECT,
    });
    if (isExistResult) {
      res.json({ message: '이미 구독중입니다.' });
    }

    const insertSql = `INSERT INTO subscribe (subscribers, subscribing) VALUE (${myId.id}, ${artistId});`;
    await sequelize.query(insertSql, {
      type: QueryTypes.INSERT,
    });
    res.json({ insert: true });
  } catch (error) {
    console.error(error);
  }
});

router.delete('/subscribe', async (req, res) => {
  try {
    const { paramsData } = req.query;
    const jsonData = JSON.parse(paramsData);
    const { artistId } = jsonData;
    const { myMetamask } = jsonData;

    const myId = await User.findOne({
      where: { metamask: myMetamask },
    });
    const sql = `DELETE FROM subscribe WHERE subscribers =${myId.id} AND subscribing = ${artistId};`;
    await sequelize.query(sql, {
      type: QueryTypes.DELETE,
    });

    // await User.destroy({
    //   include: [
    //     {
    //       model: User,
    //       as: 'subscribers',
    //       through: {
    //         where: {
    //           subscribing: artistId,
    //         },
    //       },
    //     },
    //   ],
    //   where: { metamask: myMetamask },
    // });
    res.json({ delete: true });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
