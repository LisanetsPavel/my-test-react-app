import React from 'react';
import { CssBaseline } from '@mui/material';

import TestComponent from '../../Tmp/TestComponent';
import Header from '../Header';

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
