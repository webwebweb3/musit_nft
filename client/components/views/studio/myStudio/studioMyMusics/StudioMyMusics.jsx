import StudioMusicCard from 'components/views/cards/StudioMusicCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const StudioMyMusics = () => {
  const studio = useSelector(state => state.studio);

  return (
    <div>
      <Grid container columns={{ xs: 3, sm: 8, md: 12 }}>
        {studio.studioMyMusics.map((v, i) => {
          return (
            <Grid item xs={2} sm={3} md={4} key={i}>
              <StudioMusicCard
                musics={v.IPFSUrl}
                albumCovers={v.S3AlbumCover}
                datas={v.dataToSubmit}
                key={i}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default StudioMyMusics;
