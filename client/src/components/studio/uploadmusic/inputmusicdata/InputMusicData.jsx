import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import * as Util from './utils';
import axios from 'axios';

const currencies = Util.utilCurrencies;

const InputMusicData = ({ account }) => {
  const [currency, setCurrency] = useState('balad');

  const userArtist = async () => {
    console.log('1414');
    const request = await axios.get(`/api/uploadmusic/${account}`);
    console.log(request);
  };
  userArtist();

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ width: '25ch' }}>
        <TextField id="standardc" label="타이틀" variant="standard" />
        <TextField
          id="standard-basic"
          label="아티스트"
          variant="standard"
          value={account}
          inputProps={{ readOnly: true }}
        />
        <TextField id="standard-basic" label="Standdard" variant="standard" />

        <TextField
          id="outlined-select-currency"
          select
          label="Genre"
          value={currency}
          onChange={handleChange}
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
{
  /* <MyFormHelperText /> */
}
