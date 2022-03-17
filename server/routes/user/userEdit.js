const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { User } = require('../../models');

//------------------------------------------------
//               /api/userEdit
//------------------------------------------------

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

router.post('/', upload.none(), async (req, res) => {
  try {
    console.log(req.body);
    // 메타 마스크를 추가해주자.
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
    res.json('ok');
  } catch (error) {
    console.error(error);
  }
});

router.post('/img', upload.array('image'), (req, res) => {
  console.log(req.files);
  res.json(req.files.map(v => v.filename));
});

module.exports = router;
