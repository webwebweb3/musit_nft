import React, { useCallback, useEffect, useState } from 'react';
import { Dialog, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import { registerRequestAction } from '$reduxsaga/request/user_request';
import { useGenreInput, useInput } from '$hooks/useInput';
import { useWalletInfo } from '$hooks/web3';
import TabPanel from '$components/mui/TanPanel';
import UnstyledSelectsMultiple from '$components/mui/SelectNationality';
import MultipleSelectChip from '$components/mui/ChipGenre';
import TextFieldInput from '$components/mui/TextFieldInput';
import RegisterButton from '../button/RegisterButton';

const RegisterModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const theme = useTheme();
  const [artist, onChangeArtist, setArtist] = useInput('');
  const [genre, onChangeGenre, setGenre] = useGenreInput([]);
  const [nationality, onChangeNationality] = useState(0);
  const [value, setValue] = useState(0);
  const { account } = useWalletInfo();

  useEffect(() => {
    if (user.registerUserError) {
      alert(user.registerUserError);
    }
    if (user.registerUserDone) {
      alert('회원가입에 성공했습니다.');
      setArtist('');
      setGenre([]);
      onChangeNationality(0);
      setValue(0);
    }
    setOpen(false);
  }, [user, setOpen, setArtist, setGenre]);

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
      let dataToSubmit = {
        metamask: account.data,
        genre,
        nationality,
      };

      if (artist) {
        dataToSubmit = {
          ...dataToSubmit,
          name: artist,
          role: '1',
        };
      }

      dispatch(registerRequestAction(dataToSubmit));
    },
    [dispatch, artist, genre, nationality, account],
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
            <form onSubmit={onSubmitUserForm}>
              <TextFieldInput
                label="아티스트 명"
                value={artist}
                func={onChangeArtist}
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
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default RegisterModal;
