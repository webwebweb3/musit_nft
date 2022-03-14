import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import * as Util from './utils';
import axios from 'axios';

const currencies = Util.utilCurrencies;

const InputMusicData = ({ account }) => {
  const [artistName, setArtistName] = useState('');
  const [currency, setCurrency] = useState('balad');

  const userArtist = async () => {
    //TODO:const request =
    await axios
      .get(`/api/uploadmusic/${account}`)
      .then(res => setArtistName(res.data.artistName));
  };
  userArtist();
  useEffect(() => {}, [artistName]);

  const onHandleChangeGenre = event => {
    setCurrency(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ width: '40ch' }} margin="normal">
        <TextField id="standardc" label="타이틀" variant="standard" required />
        <TextField
          id="standard-basic"
          label="아티스트"
          variant="standard"
          value={artistName}
          inputProps={{ readOnly: true }}
          required
        />
        <TextField id="standard-basic" label="앨범명" variant="standard" />
        <TextField id="standard-basic" label="발매년도" variant="standard" />
        <TextField id="standard-basic" label="작곡가" variant="standard" />
        <TextField id="standard-basic" label="작사가" variant="standard" />

        <TextField
          id="outlined-select-currency"
          select
          label="Genre"
          value={currency}
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
