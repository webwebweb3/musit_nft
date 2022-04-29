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
import React, { useEffect } from 'react';
import { StyledFormControl } from '$components/views/auctionpage/style';
import Link from 'next/link';
import { useInput } from '$hooks/useInput';
import Router from 'next/router';

const LeftSideBar = () => {
  const [searchArtist, onChangeSearchArtist] = useInput('');
  const [searchTitle, onChangeSearchTitle] = useInput('');
  const [genre, onChangeGenre] = useInput('');

  useEffect(() => {
    if (!genre) return;
    Router.replace(`?genre=${genre}`);
  }, [genre]);

  return (
    <Box sx={{ width: '180px' }}>
      <Box>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ color: '#dada', marginLeft: '10px' }}
        >
          제목
        </FormLabel>
        <StyledFormControl focused variant="outlined">
          <Input
            id="filled-adornment-weight"
            value={searchTitle || ''}
            onChange={onChangeSearchTitle}
            endAdornment={
              <InputAdornment position="end">
                <Link href={`?title=${searchTitle}`} replace={true}>
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

      <Box>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ color: '#dada', marginLeft: '10px' }}
        >
          아티스트
        </FormLabel>
        <StyledFormControl focused variant="outlined">
          <Input
            id="filled-adornment-weight"
            value={searchArtist || ''}
            onChange={onChangeSearchArtist}
            endAdornment={
              <InputAdornment position="end">
                <Link href={`?artist=${searchArtist}`} replace={true}>
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

      <Box sx={{ margin: '10px 20px 110px auto' }}>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: '#dada', margin: '15px -5px 15px 0' }}
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
