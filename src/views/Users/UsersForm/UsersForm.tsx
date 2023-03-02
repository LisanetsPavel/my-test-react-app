import React from 'react';
import { AddUser } from '@views/Users';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function UsersForm() {
  return (
    <Box margin={2} width="70%">
      <AddUser />
      <Outlet />
    </Box>
  );
}
