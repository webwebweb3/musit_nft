import { Button, Modal, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
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

  const handleClose = () => setOpen(false);

  const onSubmitForm = e => {
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
  };

  const onChangeGenre = e => {
    setGenre(e.target.value);
  };

  const onChangeNationality = e => {
    setNationality(e.target.value);
  };

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

export default RegisterModal;
