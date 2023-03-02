import React from 'react';
import { Box } from '@mui/material';
import style from '@views/App/Header/style';
import LogoutIcon from '@mui/icons-material/Logout';
import { iconStyles } from '@styles/sharedStyles';
import { logout } from '@store/Auth/reducers/authReducer';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={style}>
      <Box
        sx={{
          flex: 2,
        }}
      >
        Header
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <LogoutIcon sx={iconStyles} onClick={handleLogout} />
      </Box>
    </Box>
  );
}
