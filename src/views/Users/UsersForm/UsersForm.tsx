import React from 'react';
import { AddUser, UsersList } from '@views/Users';
import { Box } from '@mui/material';

export default function UsersForm() {
  return (
    <Box margin={2} width="70%">
      <AddUser />
      <UsersList />
    </Box>
  );
}
