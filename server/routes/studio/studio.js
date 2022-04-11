const express = require('express');

const router = express.Router();
const { User, UserCover } = require('../../models');

//------------------------------------------------
//               /api/studio
//------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const { userName } = req.query;

    console.log('유저 네임', userName);

    const userId = await User.findOne({
      where: { name: userName },
    });
    console.log('userId', userId);
    if (userId === null) {
      res.status(404).send('없는 페이지입니다.');
    }
    const userProfile = userId.img;
    console.log('유저 프로필', userProfile);
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

module.exports = router;
