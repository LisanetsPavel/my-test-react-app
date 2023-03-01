import React from 'react';
import { Box } from '@mui/material';

export default function LeftNavigationPanel() {
  return (
    <Box
      sx={(theme) => ({
        width: '400px',
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
      })}
    >
      Left panel
    </Box>
  );
}
