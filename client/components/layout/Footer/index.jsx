import {
  Pause,
  PlayArrow,
  Repeat,
  RepeatOne,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { Slider } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ControlsToggleButton from './music/Button';

const Footer = () => {
  const audioElement = useRef();
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);

  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);

  useEffect(() => {
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
      if (audioElement.current != null)
        setDuration(audioElement.current.duration);
    };
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    });
  });

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
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

  return (
    <div style={{ color: 'black' }}>
      <div>
        {!isNaN(seekTime) && (
          <Slider
            className={'playback-completed'}
            value={seekTime}
            onChange={handleSeekChange}
          />
        )}
      </div>
      <ControlsToggleButton
        type={'prev'}
        defaultIcon={<SkipPrevious fontSize={'large'} />}
        changeIcon={<SkipPrevious fontSize={'large'} />}
        onClicked={handleToggle}
      />
      <audio ref={audioElement} src={`1.mp3`} preload={'metadata'} />
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
      <span>{formatTime(currTime)}</span>/<span>{formatTime(duration)}</span>
      <Slider
        style={{ color: '#000' }}
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default Footer;
