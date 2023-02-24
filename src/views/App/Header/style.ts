import { Theme } from '@mui/material';

export default (theme: Theme) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  borderBottom: '1px solid',
  width: '100%',
});
