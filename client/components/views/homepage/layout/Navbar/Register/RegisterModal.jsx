import React, { useCallback, useEffect, useState } from 'react';
import { Dialog, Tab, Tabs } from '@mui/material';
import propTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { registerRequestAction } from '../../../../_actions/user_actions';
import { useGenreInput, useInput } from '../../../../hooks/useInput';
import RegisterButton from './button/RegisterButton';
import UnstyledSelectsMultiple from '../../../mui/SelectNationality';
import MultipleSelectChip from '../../../mui/ChipGenre';
import TabPanel from '../../../mui/TanPanel';
import TextFieldInput from '../../../mui/TextFieldInput';

const RegisterModal = ({ open, setOpen, id }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const theme = useTheme();
  const [artist, onChangeArtist] = useInput('');
  const [genre, onChangeGenre] = useGenreInput([]);
  const [nationality, onChangeNationality] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (user.registerUserError) {
      alert(user.registerUserError);
    }
    setOpen(false);
  }, [user, setOpen]);

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
        metamask: id,
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
    [dispatch, artist, genre, nationality, id],
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
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};

export default RegisterModal;
