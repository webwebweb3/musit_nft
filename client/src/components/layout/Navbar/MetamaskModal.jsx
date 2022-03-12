import React from 'react';
import { Modal, Paper, Typography } from '@mui/material';
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
const MetamaskModal = ({ loading, setLoading }) => {
  const handleLoadingClose = () => setLoading(false);

  return (
    <>
      <Modal
        open={loading}
        onClose={handleLoadingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            메타마스크 로그인 해주세요.
          </Typography>
        </Paper>
      </Modal>
    </>
  );
};

export default MetamaskModal;
