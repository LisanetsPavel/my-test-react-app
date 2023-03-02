import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  '& a': {
    textDecoration: 'none',
    color: 'white',
  },
};

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'red' : 'inherit',
});

export default function LeftNavigationPanel() {
  return (
    <Box
      sx={(theme) => ({
        width: '400px',
        backgroundColor: theme.palette.secondary.main,
        height: '100vh',
      })}
    >
      Left panel
      <Box p={1} sx={linkStyle}>
        <NavLink style={navLinkStyle} to="/users/list" title="USERS">
          USERS
        </NavLink>
      </Box>
      <Box p={1} sx={linkStyle}>
        <NavLink style={navLinkStyle} to="/posts" title="POSTS">
          POSTS
        </NavLink>
      </Box>
    </Box>
  );
}
