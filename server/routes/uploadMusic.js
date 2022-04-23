const express = require('express');

const router = express.Router();
const ipfsHttpClient = require('ipfs-http-client');

const fs = require('fs');
const { User, Music, MusicPlayTime } = require('../models');

//------------------------------------------------
//               /api/uploadmusic
//------------------------------------------------

const client = ipfsHttpClient.create('https://ipfs.infura.io:5001/api/v0');

router.get('/:id', async (req, res) => {
  try {
    const user = req.params.id;
    const exUser = await User.findOne({
      where: {
        metamask: user,
      },
    });
    if (exUser) {
      res.json({ userName: exUser.dataValues.name });
    } else {
      res.json({ message: 'error' });
    }
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('req데이타!', req.body);
    const { IPFSurl, S3AlbumUrl, data } = req.body;
    const { userName, title, artist } = data.dataToSubmit;
    let { albumName, genre, release, songwriter, lyricist } = data.dataToSubmit;

    if (S3AlbumUrl === '' || S3AlbumUrl === null) {
      res.json({
        uploadSuccess: 'emptyS3AlbumCover',
        message: 'Upload AlbumCover',
      });
    }
    if (IPFSurl === '' || IPFSurl === null) {
      res.json({ uploadSuccess: 'emptyIPFS', message: 'Upload Music' });
    }

    if (albumName === '') {
      albumName = null;
    }
    if (genre === '') {
      genre = null;
    }
    if (release === '') {
      release = null;
    }
    if (songwriter === '') {
      songwriter = null;
    }
    if (lyricist === '') {
      lyricist = null;
    }

    if (title === '' || title === null || artist === '' || artist === null) {
      res.json({
        uploadSuccess: 'empty',
        message: 'Input data is empty',
      });
      return;
    }

    if (userName !== artist) {
      res.json({
        uploadSuccess: 'authFail',
        message: 'This user is not that artist',
      });
      return;
    }

    const exUser = await User.findOne({
      where: {
        name: artist,
      },
    });
    const postMusic = await Music.create({
      title,
      uploader: exUser.dataValues.id,
      albumName,
      release,
      songwriter,
      lyricist,
      genre,
      albumCover: S3AlbumUrl,
      IPFSUrl: IPFSurl,
    });

    await MusicPlayTime.create({
      playtime: 0,
      musicId: postMusic.dataValues.id,
    });
    res.json({ uploadSuccess: 'true' });
  } catch (error) {
    console.error(error);
  }
});

router.post('/fs', async (req, res) => {
  const jsonData = req.body;
  console.log('json', jsonData);
  fs.writeFileSync('server/json/mint.json', JSON.stringify(jsonData), err => {
    if (err) console.error(err);
  });
  const mintIPFSurl = await client.add(
    fs.readFileSync('server/json/mint.json'),
  );
  console.log('mintipfs', mintIPFSurl);

  res.json(mintIPFSurl);
});

module.exports = router;
