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
    const userBackground = userCover.backgroundImg;

    res.json({ userProfile, userBackground });
  } catch (error) {
    console.error(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const { backgroundFileName, userMetamask } = req.body;
    console.log('데이타 확인', backgroundFileName, userMetamask);

    const userId = await User.findOne({
      where: { metamask: userMetamask },
    });
    const isExist = await UserCover.findOne({
      where: { user: userId.id },
    });

    if (isExist === null) {
      await UserCover.create({
        user: userId.id,
        backgroundImg: backgroundFileName,
      });
    } else {
      await UserCover.update(
        { backgroundImg: backgroundFileName },
        { where: { user: userId.id } },
      );
    }
    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
