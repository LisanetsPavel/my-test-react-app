import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAddUserMutation } from '@store/Users';

export default function AddUser() {
  const [userName, setUserName] = useState<string>();

  const [addUser] = useAddUserMutation();

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const addUserHandle = () => {
    addUser({ name: userName });
  };

  return (
    <Box>
      <Typography variant="subtitle2">Add user</Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField value={userName} onChange={onChange} />{' '}
        <Button variant="outlined" onClick={addUserHandle}>
          ADD USER
        </Button>
      </Box>
    </Box>
  );
}
