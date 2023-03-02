import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '@store/Auth/reducers/authReducer';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4">Login page</Typography>
      <Button variant="outlined" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}
