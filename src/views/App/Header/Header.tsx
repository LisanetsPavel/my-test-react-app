import React from 'react';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        borderBottom: '1px solid',
      }}
    >
      Header
    </Box>
  );
}
