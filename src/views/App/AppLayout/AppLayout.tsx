import React from 'react';
import { Box, CssBaseline } from '@mui/material';

import Header from '@views/App/Header';
import { LeftNavigationPanel } from '@views/App/LeftNavigationPanel';
import { UsersForm } from '@views/Users';

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Box display="flex">
        <LeftNavigationPanel />
        <Box width="100%">
          <Header />
          <UsersForm />
        </Box>
      </Box>
    </>
  );
}

export default AppLayout;
