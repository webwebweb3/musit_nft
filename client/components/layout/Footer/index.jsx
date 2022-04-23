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
import React, { useEffect, useRef, useState } from 'react';
import ControlsToggleButton from './music/Button';
import Slide from 'react-reveal/Slide';
import PlayList from './music/playlist';

const Footer = () => {
  const audioElement = useRef();
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = React.useState(false);

  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);

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
    playingMusic();
    if (audioElement.current != null) {
      setDuration(audioElement.current.duration);
    }
  }, [isRepeatClicked, isPlaying, volume, isVolumeClicked]);

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
    // if (audioElement.current.currentTime >= 60) {
    //   audioElement.current.pause();
    //   alert('이용권을 구매해주세요');
    //   Router.push('/subscriptionbuy');
    // }
  }, [currTime, duration]);

  // useEffect(() => {
  //   if (isNextClicked) {
  //     let currTrackId = (id + 1) % playlists.length;
  //     dispatch(setCurrentPlaying(playlists[currTrackId]));
  //     setNextClicked(false);
  //   }
  //   if (isPrevClicked) {
  //     let currTrackId = (id - 1) % playlists.length;
  //     if (id - 1 < 0) {
  //       currTrackId = playlists.length - 1;
  //     }
  //     dispatch(setCurrentPlaying(playlists[currTrackId]));
  //     setPrevClicked(false);
  //   }
  // }, [dispatch, id, isNextClicked, isPrevClicked, playlists]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toggleAction = () => {
    setToggle(!toggle);
  };

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

  ////
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Slide bottom when={show}>
        <Box
          sx={{
            width: '100%',
            height: '80vh',
            backgroundColor: '#242424',
            marginBottom: '60px',
          }}
          style={show ? { display: 'block' } : { display: 'none' }}
        >
          <div
            style={{
              paddingLeft: '5vw',
              paddingRight: '5vw',
              paddingBottom: '3vh',
              paddingTop: '3vh',
            }}
          >
            <div style={{ marginBottom: '40px', width: '100%' }}>
              <Image src="/AR.jpg" width="700px" height="700px" />

              <div className="bottomPanel" style={{ width: '50%' }}>
                <h1>asdasdasdasdas</h1>
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
          {/* <audio ref={audioElement} src={`https://ipfs.infura.io/ipfs/${music}`} preload={'metadata'} /> */}
          <audio ref={audioElement} src={`3.mp3`} preload={'metadata'} />
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
            style={{ marginTop: '11.5px', marginLeft: '10px', color: '#dada' }}
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
              src={`/bgimg.jpg`}
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
              제목
            </div>
            <div style={{ color: '#ffffffa0' }}>아티스트</div>
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
      <PlayList open={open} setOpen={setOpen} />
    </>
  );
};

export default Footer;
