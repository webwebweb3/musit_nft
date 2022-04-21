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
import React, { useEffect, useState } from 'react';
import { StyledFormControl } from '$components/views/auctionpage/style';
import Link from 'next/link';
import { useInput } from '$hooks/useInput';
import Router, { useRouter } from 'next/router';

const LeftSideBar = () => {
  const [search, onChangeSearch] = useInput('');
  const [genre, onChangeGenre] = useInput('');
  const [state, setState] = useState('');

  useEffect(() => {
    if (!genre) return;
    Router.replace(`?genre=${genre}`);
  }, [state, genre]);

  return (
    <Box sx={{ width: '180px' }}>
      <Box>
        <StyledFormControl focused variant="outlined">
          <Input
            id="filled-adornment-weight"
            value={search || ''}
            onChange={onChangeSearch}
            endAdornment={
              <InputAdornment position="end">
                <Link href={`?search=${search}`} replace={true}>
                  <Search style={{ color: '#dada' }} />
                </Link>
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

      <Box sx={{ marginTop: '10px', marginLeft: '20px' }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: '#dada' }}
          >
            장르
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={onChangeGenre}
            name="radio-buttons-group"
            value={genre || ''}
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
