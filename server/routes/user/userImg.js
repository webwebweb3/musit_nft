const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const multer = require('multer');

require('dotenv').config();

//------------------------------------------------
//               /api/userImg
//------------------------------------------------

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더 생성.');
  fs.mkdirSync('uploads');
}

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

router.post('/', upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.location));
});

module.exports = router;
