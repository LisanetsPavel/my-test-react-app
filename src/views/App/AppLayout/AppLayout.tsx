import React from 'react';
import { Box, CssBaseline } from '@mui/material';

import Header from '@views/App/Header';
import { LeftNavigationPanel } from '@views/App/LeftNavigationPanel';

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Box display="flex" height="100vh">
        <LeftNavigationPanel />
        <Box width="100%">
          <Header />
        </Box>
      </Box>
    </>
  );
}

export default AppLayout;
