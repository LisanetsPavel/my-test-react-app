import { ThemeOptions } from '@mui/material/styles';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

const mainTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#7da67d',
    },
    secondary: {
      main: '#B2A4C3',
    },
    error: {
      main: '#c31010',
    },
    myCustomColor: {
      main: '#2e7d32',
    },
  },
};

export default mainTheme;
