import React from 'react';
import { CssBaseline } from '@mui/material';

import Header from '@views/App/Header';
import TestComponent from '@views/Tmp';

function AppLayout() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <TestComponent />
    </div>
  );
}

export default AppLayout;
