const express = require('express');
const router = express.Router();
const path = require('path');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const multer = require('multer');
const { User, Genre } = require('../../models');

require('dotenv').config();

//------------------------------------------------
//               /api/userEdit
//------------------------------------------------

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'webweb1',
    key(req, file, cb) {
      cb(null, `profile/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/', upload.none(), async (req, res) => {
  try {
    console.log(req.body);
    const { metamask, name, nationality, img, pass } = req.body;

    await User.update(
      {
        name,
        nationality,
        img,
        pass,
      },
      {
        where: { metamask },
      },
    );

    const UserInfo = await User.findOne({
      where: { metamask },
      attributes: {
        exclude: ['id', 'updatedAt', 'deletedAt'],
      },
      include: {
        model: Genre,
        attribute: ['content'],
      },
    });

    // if (genre) {
    //   const result = await Promise.all(
    //     genre.map(index => {
    //       return Genre.findOrCreate({
    //         where: { content: index },
    //       });
    //     }),
    //   );
    //   await UserInfo.addGenre(result.map(r => r[0]));
    // }

    return res.status(200).json(UserInfo);
  } catch (error) {
    console.error(error);
  }
});

router.post('/img', upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.location));
});

module.exports = router;
