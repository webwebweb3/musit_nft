import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ isVisible }) => {
  const a = `'${isVisible}'`;

  return (
    <AudioPlayer
      header="Now playing: 현재 노래 재생"
      autoPlay
      src=""
      onPlay={e => console.log('onPlay')}
      showSkipControls={true}
      style={{ display: `${isVisible}` }}
      // other props here
    />
  );
};

export default Player;
