import React from 'react';
import { Campaign } from '@mui/icons-material';
import { Badge } from '@mui/material';

const NoticeIcon = () => {
  return (
    <>
      <Badge color="secondary" badgeContent={99}>
        <Campaign color="info" />
      </Badge>
    </>
  );
};

export default NoticeIcon;
