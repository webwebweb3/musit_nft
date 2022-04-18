import { utilCurrencies } from '$util/genreType';
import { Search } from '@mui/icons-material';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import { StyledFormControl } from '$components/views/auctionpage/style';

const LeftSideBar = () => {
  return (
    <Box>
      <Box>
        <StyledFormControl focused variant="outlined">
          <Input
            id="filled-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <Search style={{ color: '#dada' }} />
              </InputAdornment>
            }
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
              style: { color: '#dada' },
            }}
          />
        </StyledFormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: '#dada' }}
          >
            판매 상태
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="판매중"
            />
            <FormControlLabel value="male" control={<Radio />} label="대기중" />
            <FormControlLabel value="other" control={<Radio />} label="취소" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: '#dada' }}
          >
            장르
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {utilCurrencies.map(genre => (
              <div key={genre.value}>
                <FormControlLabel
                  value={genre.value}
                  control={<Radio />}
                  label={genre.label}
                />
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
