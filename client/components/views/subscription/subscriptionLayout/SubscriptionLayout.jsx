import { Button } from '../../homepage/Button';
import React from 'react';
import { Global } from '../SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';
import axios from 'axios';

<Global />;
const express = require('express');
const router = express.Router();
const { User, Music } = require('../models');

//------------------------------------------------
//               /api/latestmusic
//------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const latestMusic = await Music.findAll({
      order: [['createdAt', 'ASC']],
    });
    console.log(latestMusic);
    const user = req.params.id;
    const exUser = await User.findOne({
      where: {
        metamask: user,
      },
    });
    if (exUser) {
      return res.json({ userName: exUser.dataValues.name });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

const SubscriptionLayout = ({ Icons, subIconTitle, subPrice, subTarget }) => {
  const onClickSubscribe = () => {
    axios.put('/subscribe');
  };
  return (
    <>
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="buyIcon">
                <Button
                  buttonSize="btn--large"
                  buttonColor="primary"
                  onClick={onClickSubscribe}
                >
                  <Icons />
                  <>
                    <br />
                    {subIconTitle}
                  </>
                </Button>
              </div>
              <div className="buyInfoContainer">
                <h1>{subPrice < 0.000001 ? 0 : subPrice} ETH</h1>
              </div>
              <div className="buyInfoText">{subTarget}</div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionLayout;
