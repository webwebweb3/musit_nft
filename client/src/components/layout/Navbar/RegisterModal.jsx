import React, { useCallback, useState } from 'react';
import { Button, Modal, Paper, TextField, Typography } from '@mui/material';
import propTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RegisterModal = ({
  account,
  open,
  setOpen,
  setNationality,
  nationality,
}) => {
  const dispatch = useDispatch();
  const [genre, setGenre] = useState('');

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      let dataToSubmit = {
        metamask: account,
        genre,
        nationality,
      };

      dispatch(registerUser(dataToSubmit)).then(response => {
        if (response.payload.success) {
          window.location.replace('/');
        } else {
          alert(response.payload.err);
        }
      });
      setGenre('');
      setNationality('');
    },
    [account, dispatch, genre, nationality, setNationality],
  );

  const onChangeGenre = useCallback(
    e => {
      setGenre(e.target.value);
    },
    [setGenre],
  );

  const onChangeNationality = useCallback(
    e => {
      setNationality(e.target.value);
    },
    [setNationality],
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <form onSubmit={onSubmitForm}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              장르
            </Typography>
            <TextField
              id="outlined-basic"
              label="장르"
              variant="outlined"
              value={genre}
              onChange={onChangeGenre}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              국가
            </Typography>
            <TextField
              id="outlined-basic"
              label="국가"
              variant="outlined"
              value={nationality}
              onChange={onChangeNationality}
            />
            <Button type="submit" variant="text" color="secondary">
              가입하기
            </Button>
          </form>
        </Paper>
      </Modal>
    </>
  );
};

RegisterModal.propTypes = {
  account: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
  setNationality: propTypes.func.isRequired,
  nationality: propTypes.string.isRequired,
};

export default RegisterModal;
