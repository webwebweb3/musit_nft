const express = require('express');

const router = express.Router();
const { User, UserCover } = require('../../models');

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
    }
    const userBackground = userCover.backgroundImg;
    res.json({ userProfile, userBackground });
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
    console.log('갯수 체크 한번 해라', userId.subscribers.length);
    if (userId.subscribers.length === 0) {
      console.log('여기로 들어옴??');
      res.json({ isSubscribing: false });
    }
    let tempData = { isSubscribing: false };
    for (let i = 0; i < userId.subscribers.length; i += 1) {
      console.log(i, '번째 체크', userId.subscribers[i].dataValues);
      if (userId.subscribers[i].dataValues.id === artistId.id) {
        tempData = { isSubscribing: true };
        return;
      }
    }
    console.log('여기까지 오는가??', tempData);
    res.json(tempData);
    res.json({ isSubscribing: false });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
