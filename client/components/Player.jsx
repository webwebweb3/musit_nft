import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ isVisible, music }) => {
  const a = `'${isVisible}'`;
  //const artistName = musicData.properties.dataToSubmit.artist;

  return (
    <AudioPlayer
      header="Now playing: 현재 노래 재생"
      autoPlay
      controls
      src={`https://ipfs.infura.io/ipfs/${music}`}
      onPlay={e => console.log('onPlay')}
      showSkipControls={true}
      style={{ display: `${isVisible}` }}
      // other props here
    />
  );
};

export default Player;
