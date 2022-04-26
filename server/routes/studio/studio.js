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
      console.log('유저카버 널?', userCover);
      const userBackground = userCover.backgroundImg;
      console.log('유저 백그라운드?', userBackground);
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
    console.log('아티스트 이름', artistName);
    console.log('메타마스크', myMetamask);
    const artistId = await User.findOne({
      where: { name: artistName },
    });
    console.log('artist 아이디는 ', artistId.id);

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
    console.log('쿼리 결과 한번 봅시다', isExistResult);
    if (isExistResult) {
      res.json({ message: '이미 구독중입니다.' });
    }

    const insertSql = `INSERT INTO subscribe (subscribers, subscribing) VALUE (${myId.id}, ${artistId});`;
    const inserting = await sequelize.query(insertSql, {
      type: QueryTypes.INSERT,
    });
    console.log('인설팅', inserting);
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
    console.log('앝아이디', artistId);
    console.log('내멭아이디', myMetamask);

    const myId = await User.findOne({
      where: { metamask: myMetamask },
    });
    console.log('내 아이디', myId.id);
    const sql = `DELETE FROM subscribe WHERE subscribers =${myId.id} AND subscribing = ${artistId};`;
    const deletequery = await sequelize.query(sql, {
      type: QueryTypes.DELETE,
    });
    console.log('딜리트 쿼리', deletequery);

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
