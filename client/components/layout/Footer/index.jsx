import {
  Pause,
  PlayArrow,
  Repeat,
  RepeatOne,
  SkipNext,
  SkipPrevious,
  VolumeUp,
  VolumeOff,
  Favorite,
  PlaylistAdd,
  KeyboardArrowDown,
  Headset,
  KeyboardControlKey,
  Compress,
} from '@mui/icons-material';
import { Box, Button, Slider } from '@mui/material';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ControlsToggleButton from './music/Button';
import Slide from 'react-reveal/Slide';
import PlayList from './music/playlist';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import MusicCard from '../../views/cards/MusicCard';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const audioElement = useRef();
  const { userData } = useSelector(state => state.user);
  const dateNow = parseInt(Math.round(new Date().getTime() / 1000));

  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [currentMusic, setCurrentMusic] = useState();
  const [currTrackId, setCurrTrackId] = useState(0);

  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [mySeekTime, setMySeekTime] = useState(0);
  const { t, i18n } = useTranslation();

  const playingMusic = () => {
    isPlaying
      ? audioElement.current
          .play()
          .then(() => {})
          .catch(e => {
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
          })
      : audioElement.current.pause();
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.volume = volume / 100;
    audioElement.current.muted = isVolumeClicked;
    audioElement.current.onloadeddata = () => {
      if (audioElement.current != null) {
        setDuration(audioElement.current.duration);
      }
    };
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    });
  };

  useEffect(() => {
    if (userData) {
      if (userData.user) {
        setCurrentMusic(userData.user[0]);
        setUserInfo(userData.user);
      }
    } else {
      setCurrentMusic(null);
      setUserInfo(null);
      setToggle(false);
      // 재생 시킨 음악의 재생 시간
      console.log(seekTime);
      // 이곳에 UserDB 에 마지막 재생 노래정보와 총 재생시간, 현재까지 재생시간을 추가한다.
      setMySeekTime(seekTime);
    }
  }, [userData]);

  useEffect(() => {
    if (currentMusic) {
      playingMusic();
    }
    if (audioElement.current != null) {
      if (userData?.subscription < dateNow) {
        setDuration(60);
      } else {
        setDuration(audioElement.current.duration);
      }
    }
    // 이곳에 UserDB 에 마지막 재생 노래정보와 총 재생시간, 현재까지 재생시간을 추가한다.
    // 이곳에 음악이 시작되고 1분이 넘어가면 음악DB의 재생횟수가 1 증가한다.

    // if (audioElement.current != null) {
    //   if (userData.subscription < dateNow) {
    //     setDuration(60);
    //   } else {
    //     setDuration(audioElement.current.duration);
    //   }
    // }
  }, [isRepeatClicked, isPlaying, currentMusic, volume, isVolumeClicked]);

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
    if (audioElement.current != null) {
      if (userData?.subscription < dateNow) {
        if (audioElement.current.currentTime >= 60) {
          audioElement.current.pause();
          audioElement.current.currentTime = 0;
          alert('이용권을 구매해주세요');
          Router.push('/subscriptionbuy');
        }
      }
    }
    // if (audioElement.current != null) {
    //   if (userData.subscription < dateNow) {
    //     if (audioElement.current.currentTime >= 60) {
    //       audioElement.current.pause();
    //       audioElement.current.currentTime = 0;
    //       alert('이용권을 구매해주세요');
    //       Router.push('/subscriptionbuy');
    //     }
    //   }
    // }
  }, [currTime, duration]);

  useEffect(() => {
    if (isNextClicked) {
      console.log(currTrackId);
      let trackId = currTrackId + 1;
      if (userInfo.length <= currTrackId + 1) {
        trackId = 0;
      }
      setCurrTrackId(trackId);
      setCurrentMusic(userInfo[trackId]);
      setNextClicked(false);
    }
    if (isPrevClicked) {
      console.log(currTrackId);
      let trackId = userInfo.length - 1;
      if (currTrackId - 1 >= 0) {
        trackId = currTrackId - 1;
      }
      setCurrTrackId(trackId);
      setCurrentMusic(userInfo[trackId]);
      setPrevClicked(false);
    }
  }, [isNextClicked, isPrevClicked, userInfo]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const toggleAction = useCallback(() => {
    if (!userData) {
      alert(t('LoginPlz'));
      return;
    }
    setToggle(!toggle);
  }, [toggle, userData]);

  const handleToggle = (type, val) => {
    switch (type) {
      case 'repeat':
        setRepeatClick(val);
        break;
      case 'prev':
        setPrevClicked(val);
        break;
      case 'play-pause':
        setPlayPauseClicked(val);
        break;
      case 'next':
        setNextClicked(val);
        break;
      case 'volume':
        setVolumeClicked(val);
        break;
      default:
        break;
    }
  };

  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime = (newValue * duration) / 100;
    setSeekTime(newValue);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const formatTime = secs => {
    const t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    let s = t.toTimeString().substr(0, 8);
    if (secs > 86399)
      s = Math.floor((t - Date.parse('1/1/70')) / 3600000) + s.substr(2);
    return s.substring(3);
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Slide bottom when={show}>
        <Box
          sx={{
            width: '100%',
            height: '85vh',
            backgroundColor: '#242424',
            marginBottom: '20px',
          }}
          style={show ? { display: 'block' } : { display: 'none' }}
        >
          <div
            style={{
              paddingLeft: '200PX',
              paddingRight: '200PX',
              paddingBottom: '50PX',
              paddingTop: '50PX',
              justifyContent: 'center',
            }}
          >
            <div style={{ marginBottom: '40px', width: '100%' }}>
              <div className="ListContainer">
                <span className="CoverArt">
                  <Image src="/AR.jpg" width="600px" height="600px" />
                </span>
                <div className="TList" style={{ backgroundColor: '#0d0f1a' }}>
                  <h2 style={{ color: '#fff', paddingLeft: '30px' }}>
                    {t('PlayLists')}
                  </h2>
                  {userInfo &&
                    userInfo.map(music => (
                      <div
                        style={{
                          display: 'flex',
                          marginLeft: '30px',
                          marginBottom: '10px',
                          backgroundColor: '#0d0f1a',
                          color: '#fff',
                        }}
                      >
                        <Image
                          width="50px"
                          height="50px"
                          src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${music.albumCover}`}
                          alt="logo"
                          layout="fixed"
                        />
                        <span style={{ paddingRight: '100px' }}>
                          <span
                            style={{
                              margin: 'auto 30px',
                              fontWeight: 'bold',
                              fontSize: '25px',
                            }}
                          >
                            {music.title}
                          </span>
                          <span style={{ margin: 'auto 20px' }}>
                            {music.title}
                          </span>
                        </span>
                        <span style={{ margin: 'auto 50px' }}>00:00</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bottomPanel" style={{ width: '50%' }}>
                <h1 style={{ color: '#fff' }}>가수/ 노래제목</h1>
              </div>
            </div>
          </div>
        </Box>
      </Slide>
      <Box
        style={{
          position: 'fixed',
          bottom: '35px',
          right: '35px',
          color: 'black',
          borderRadius: '50%',
          backgroundColor: 'rgb(33,33,33)',
          display: `${toggle ? 'none' : 'block'}`,
        }}
      >
        <Button onClick={toggleAction}>
          <Headset
            fontSize="medium"
            sx={{
              color: 'white',
              width: '55px',
              height: '55px',
              marginLeft: '0px',
              marginTop: '0px',
            }}
          />
        </Button>
      </Box>

      {!isNaN(seekTime) && (
        <Slider
          className={'playback-completed'}
          value={seekTime}
          style={{
            zIndex: '5',
            bottom: '75px',
            display: `${toggle ? 'block' : 'none'}`,
          }}
          onChange={handleSeekChange}
        />
      )}
      {currentMusic ? (
        <Box
          style={{
            position: 'fixed',
            bottom: '0px',
            width: '100%',
            color: 'black',
            backgroundColor: 'rgb(33,33,33)',
            height: '90px',
            display: `${toggle ? 'block' : 'none'}`,
          }}
        >
          <Box
            style={{
              margin: '20px',
              display: 'flex',
            }}
          >
            <ControlsToggleButton
              type={'prev'}
              defaultIcon={<SkipPrevious fontSize={'large'} />}
              changeIcon={<SkipPrevious fontSize={'large'} />}
              onClicked={handleToggle}
            />
            {/* 음악 */}
            {/* QmcWB6Pphb22ev9qQMzDnAQod7F9XKaf6fp2JoAuHp7xuD */}
            <audio
              ref={audioElement}
              src={`https://ipfs.infura.io/ipfs/${currentMusic.IPFSUrl}`}
              preload={'metadata'}
            />
            {/* <audio ref={audioElement} src={`3.mp3`} preload={'metadata'} /> */}
            <ControlsToggleButton
              type={'play-pause'}
              defaultIcon={<PlayArrow fontSize={'large'} />}
              changeIcon={<Pause fontSize={'large'} />}
              onClicked={handleToggle}
            />
            <ControlsToggleButton
              type={'next'}
              defaultIcon={<SkipNext fontSize={'large'} />}
              changeIcon={<SkipNext fontSize={'large'} />}
              onClicked={handleToggle}
            />
            <ControlsToggleButton
              type={'repeat'}
              defaultIcon={<Repeat fontSize={'large'} />}
              changeIcon={<RepeatOne fontSize={'large'} />}
              onClicked={handleToggle}
            />
            <div
              style={{
                marginTop: '11.5px',
                marginLeft: '10px',
                color: '#dada',
              }}
            >
              {formatTime(currTime)}
              &nbsp;/&nbsp;
              {formatTime(duration)}
            </div>
            <Slider
              style={{
                color: '#dada',
                display: 'inline-block',
                width: '120px',
                marginLeft: 'auto',
                marginRight: '10px',
                marginTop: '9.5px',
              }}
              value={volume}
              onChange={handleVolumeChange}
            />
            <div
              style={{
                display: 'inline-block',
              }}
            >
              <ControlsToggleButton
                type={'volume'}
                defaultIcon={<VolumeUp fontSize={'large'} />}
                changeIcon={<VolumeOff fontSize={'large'} />}
                onClicked={handleToggle}
              />
            </div>
            <div style={{ paddingRight: '20px', marginLeft: '24px' }}>
              <Image
                src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/${currentMusic.albumCover}`}
                alt={`album Cover`}
                layout="fixed"
                width="48px"
                height="48px"
              />
            </div>
            <div style={{ marginRight: '20px' }}>
              <div
                style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}
              >
                {currentMusic.title}
              </div>
              <div style={{ color: '#ffffffa0' }}>{currentMusic.title}</div>
            </div>
            <Button>
              <Favorite
                fontSize="medium"
                sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
              />
            </Button>
            <Button>
              <PlaylistAdd
                onClick={handleClickOpen}
                fontSize="medium"
                sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
              />
            </Button>
            <Button
              className="btn btn-success my-5"
              type="button"
              onClick={handleClick}
            >
              {show ? (
                <>
                  <KeyboardControlKey
                    fontSize="medium"
                    sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
                  />
                </>
              ) : (
                <>
                  <KeyboardArrowDown
                    fontSize="medium"
                    sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
                  />
                </>
              )}
            </Button>
            <Button onClick={toggleAction}>
              <Compress
                fontSize="medium"
                sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
              />
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            style={{
              position: 'fixed',
              bottom: '0px',
              width: '100%',
              color: 'black',
              backgroundColor: 'rgb(33,33,33)',
              height: '90px',
              display: `${toggle ? 'block' : 'none'}`,
            }}
          >
            <Box
              style={{
                margin: '20px',
                display: 'flex',
              }}
            >
              <ControlsToggleButton
                type={'prev'}
                defaultIcon={<SkipPrevious fontSize={'large'} />}
                changeIcon={<SkipPrevious fontSize={'large'} />}
                onClicked={handleToggle}
              />
              {/* 음악 */}
              {/* QmcWB6Pphb22ev9qQMzDnAQod7F9XKaf6fp2JoAuHp7xuD */}
              {/* <audio
              ref={audioElement}
              src={`https://ipfs.infura.io/ipfs/${currentMusic.IPFSUrl}`}
              preload={'metadata'}
            /> */}
              {/* <audio ref={audioElement} src={`3.mp3`} preload={'metadata'} /> */}
              <ControlsToggleButton
                type={'play-pause'}
                defaultIcon={<PlayArrow fontSize={'large'} />}
                changeIcon={<Pause fontSize={'large'} />}
                onClicked={handleToggle}
              />
              <ControlsToggleButton
                type={'next'}
                defaultIcon={<SkipNext fontSize={'large'} />}
                changeIcon={<SkipNext fontSize={'large'} />}
                onClicked={handleToggle}
              />
              <ControlsToggleButton
                type={'repeat'}
                defaultIcon={<Repeat fontSize={'large'} />}
                changeIcon={<RepeatOne fontSize={'large'} />}
                onClicked={handleToggle}
              />
              <div
                style={{
                  marginTop: '11.5px',
                  marginLeft: '10px',
                  color: '#dada',
                }}
              >
                {formatTime(currTime)}
                &nbsp;/&nbsp;
                {formatTime(duration)}
              </div>
              <Slider
                style={{
                  color: '#dada',
                  display: 'inline-block',
                  width: '120px',
                  marginLeft: 'auto',
                  marginRight: '10px',
                  marginTop: '9.5px',
                }}
                value={volume}
                onChange={handleVolumeChange}
              />
              <div
                style={{
                  display: 'inline-block',
                }}
              >
                <ControlsToggleButton
                  type={'volume'}
                  defaultIcon={<VolumeUp fontSize={'large'} />}
                  changeIcon={<VolumeOff fontSize={'large'} />}
                  onClicked={handleToggle}
                />
              </div>
              <div style={{ paddingRight: '20px', marginLeft: '24px' }}>
                {/* <Image
                src={`https://webwebweb3.s3.ap-northeast-2.amazonaws.com/upload/`}
                alt={`album Cover`}
                layout="fixed"
                width="48px"
                height="48px"
              /> */}
              </div>
              <div style={{ marginRight: '20px' }}>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                ></div>
                <div style={{ color: '#ffffffa0' }}></div>
              </div>
              <Button>
                <Favorite
                  fontSize="medium"
                  sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
                />
              </Button>
              <Button>
                <PlaylistAdd
                  onClick={handleClickOpen}
                  fontSize="medium"
                  sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
                />
              </Button>
              <Button
                className="btn btn-success my-5"
                type="button"
                onClick={handleClick}
              >
                {show ? (
                  <>
                    <KeyboardControlKey
                      fontSize="medium"
                      sx={{
                        color: 'white',
                        marginLeft: '0px',
                        marginTop: '0px',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <KeyboardArrowDown
                      fontSize="medium"
                      sx={{
                        color: 'white',
                        marginLeft: '0px',
                        marginTop: '0px',
                      }}
                    />
                  </>
                )}
              </Button>
              <Button onClick={toggleAction}>
                <Compress
                  fontSize="medium"
                  sx={{ color: 'white', marginLeft: '0px', marginTop: '0px' }}
                />
              </Button>
            </Box>
          </Box>
        </>
      )}
      <PlayList open={open} setOpen={setOpen} />
    </>
  );
};

export default Footer;
