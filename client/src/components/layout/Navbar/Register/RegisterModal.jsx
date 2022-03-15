import React, { useCallback, useState } from 'react';
import { Dialog, Tab, Tabs, TextField } from '@mui/material';
import propTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { registerUser } from '../../../../_actions/user_actions';
import { metaMaskUser } from '../../../../_actions/metamask_actions';
import { useGenreInput, useInput } from '../../../../hooks/useInput';
import RegisterButton from '../Register/button/RegisterButton';
import UnstyledSelectsMultiple from './mui/SelectNationality';
import MultipleSelectChip from './mui/ChipGenre';
import TabPanel from './mui/TanPanel';

const RegisterModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [artist, onChangeArtist] = useInput('');
  const [genre, onChangeGenre] = useGenreInput([]);
  const [nationality, onChangeNationality] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const onSubmitUserForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(metaMaskUser()).then(response => {
        let dataToSubmit = {
          metamask: response.userMetamask,
          genre,
          nationality,
        };

        dispatch(metaMaskUser()).then(response => {
          console.log(response);
          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.request.success) {
              setOpen(false);
              window.location.replace('/');
            } else {
              alert(response.request.message);
            }
          });
        });
      });
    },
    [dispatch, genre, nationality, setOpen],
  );

  const onSubmitArtistForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(metaMaskUser()).then(response => {
        let dataToSubmit = {
          metamask: response.userMetamask,
          name: artist,
          genre,
          nationality,
          role: '1',
        };

        dispatch(registerUser(dataToSubmit)).then(response => {
          if (response.request.success) {
            setOpen(false);
            window.location.replace('/');
          } else {
            alert(response.request.message);
          }
        });
      });
    },
    [dispatch, artist, genre, nationality, setOpen],
  );

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: '40%', height: '43%' } }}
        aria-labelledby="draggable-dialog-title"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: 'gray' } }}
          aria-label="action tabs example"
        >
          <Tab label={<span style={{ color: 'black' }}>User</span>} />
          <Tab label={<span style={{ color: 'black' }}>Artist</span>} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <form onSubmit={onSubmitUserForm}>
              <UnstyledSelectsMultiple
                value={nationality}
                func={onChangeNationality}
              />
              <MultipleSelectChip value={genre} func={onChangeGenre} />
              <RegisterButton />
            </form>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <form onSubmit={onSubmitArtistForm}>
              <TextField
                label="아티스트 명"
                variant="outlined"
                value={artist}
                onChange={onChangeArtist}
                fullWidth
                sx={{ display: 'block', margin: '1px', width: '320px' }}
              />
              <UnstyledSelectsMultiple
                value={nationality}
                func={onChangeNationality}
              />
              <MultipleSelectChip value={genre} func={onChangeGenre} />
              <RegisterButton />
            </form>
          </TabPanel>
        </SwipeableViews>
      </Dialog>
    </>
  );
};

RegisterModal.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};

export default RegisterModal;
