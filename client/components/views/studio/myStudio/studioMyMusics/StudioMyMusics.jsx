import StudioMusicCard from 'components/views/cards/StudioMusicCard';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const StudioMyMusics = () => {
  const studio = useSelector(state => state.studio);
  const studioMusicComponent = studio.studioMyMusics.map((v, i) => {
    return (
      <StudioMusicCard
        musics={v.IPFSUrl}
        albumCovers={v.S3AlbumCover}
        datas={v.dataToSubmit}
        key={i}
      />
    );
  });

  return <div>{studioMusicComponent}</div>;
};

export default StudioMyMusics;
