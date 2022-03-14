import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import * as Util from './utils';
import axios from 'axios';

const currencies = Util.utilCurrencies;

const InputMusicData = props => {
  const [artistName, setArtistName] = useState('');
  const [inputDatas, setInputDatas] = useState({
    title: '',
    artist: '',
    albumName: '',
    release: '',
    songwriter: '',
    lyricist: '',
    genre: 'balad',
  });

  const userArtist = async () => {
    //TODO:const request =
    await axios.get(`/api/uploadmusic/${props.account}`).then(res => {
      setArtistName(res.data.artistName);
    });
  };
  userArtist();
  useEffect(() => {}, [artistName]);

  const onHandleChangeGenre = e => {
    setInputDatas({ ...inputDatas, genre: e.target.value });
    props.onChange(inputDatas);
  };

  const onChangeTitle = e => {
    setInputDatas({ ...inputDatas, title: e.target.value });
    props.onChange(inputDatas);
  };
  const onChangeArtist = e => {
    setInputDatas({ ...inputDatas, artist: e.target.value });
    props.onChange(inputDatas);
  };
  const onChangeAlbumName = e => {
    setInputDatas({ ...inputDatas, albumName: e.target.value });
    props.onChange(inputDatas);
  };
  const onChangeRelease = e => {
    setInputDatas({ ...inputDatas, release: e.target.value });
    props.onChange(inputDatas);
  };
  const onChangeSongwriter = e => {
    setInputDatas({ ...inputDatas, songwriter: e.target.value });
    props.onChange(inputDatas);
  };
  const onChangeLyricist = e => {
    setInputDatas({ ...inputDatas, lyricist: e.target.value });
    props.onChange(inputDatas);
  };

  return (
    <Box>
      <FormControl sx={{ width: '40ch' }} margin="normal">
        <TextField
          id="music_title"
          name="music_title"
          label="타이틀"
          variant="standard"
          onChange={onChangeTitle}
          required
        />
        <TextField
          id="music_artist"
          label="아티스트"
          variant="standard"
          value={artistName}
          onChange={onChangeArtist}
          inputProps={{ readOnly: true }}
          required
        />
        <TextField
          id="music_albumName"
          name="music_albumName"
          label="앨범명"
          variant="standard"
          onChange={onChangeAlbumName}
        />
        <TextField
          id="music_release"
          name="music_release"
          label="발매년도"
          variant="standard"
          onChange={onChangeRelease}
        />
        <TextField
          id="music_basic"
          name="music_basic"
          songwriter="작곡가"
          variant="standard"
          onChange={onChangeSongwriter}
        />
        <TextField
          id="music_basic"
          name="music_basic"
          lyricist="작사가"
          variant="standard"
          onChange={onChangeLyricist}
        />

        <TextField
          id="music_genre"
          select
          label="Genre"
          value="balad"
          onChange={onHandleChangeGenre}
          helperText="Please select music genre"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
};

export default InputMusicData;

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return 'This field is being focused';
//     }

//     return 'Helper text';
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }
// {
//   /* <MyFormHelperText /> */
// }
