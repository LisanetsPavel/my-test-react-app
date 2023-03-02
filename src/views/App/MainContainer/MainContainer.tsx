import { Box } from '@mui/material';
import { LeftNavigationPanel } from '@views/App/LeftNavigationPanel';
import Header from '@views/App/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
  return (
    <Box display="flex">
      <LeftNavigationPanel />
      <Box width="100%">
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}
