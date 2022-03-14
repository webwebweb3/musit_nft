import React, { useCallback, useState } from 'react';
import { Dialog, Paper, Tab, Tabs, TextField, Typography } from '@mui/material';
import propTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerArtist,
  registerUser,
} from '../../../../_actions/user_actions';
import { useInput } from '../../../../hooks/useInput';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import RegisterButton from './RegisterButton';
import UnstyledSelectsMultiple from './mui/SelectNationality';
import MultipleSelectChip from './mui/ChipGenre';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: propTypes.node,
  index: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
};

const RegisterModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const metamask = useSelector(state => state.metamask);
  const [nationality, onChangeNationality] = useState(0);
  const [genre, setGenre] = useState([]);
  const [artist, onChangeArtist] = useInput('');
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const onChangeGenre = event => {
    const {
      target: { value },
    } = event;
    setGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onSubmitUserForm = useCallback(
    e => {
      e.preventDefault();

      let dataToSubmit = {
        metamask: metamask.userMetamask,
        genre,
        nationality,
      };

      dispatch(registerUser(dataToSubmit)).then(response => {
        if (response.request.success) {
          setOpen(false);
          window.location.replace('/');
        } else {
          alert(response.payload.err);
        }
      });
    },
    [dispatch, metamask, genre, nationality, setOpen],
  );

  const onSubmitArtistForm = useCallback(
    e => {
      e.preventDefault();

      let dataToSubmit = {
        metamask: metamask.userMetamask,
        name: artist,
        genre,
        nationality,
      };

      dispatch(registerArtist(dataToSubmit)).then(response => {
        if (response.request.success) {
          setOpen(false);
          window.location.replace('/');
        } else {
          alert(response.payload.err);
        }
      });
    },
    [dispatch, metamask, artist, genre, nationality, setOpen],
  );

  return (
    <>
      <Paper sx={style}>
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
      </Paper>
    </>
  );
};

RegisterModal.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};

export default RegisterModal;
