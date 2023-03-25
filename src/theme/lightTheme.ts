import { Roboto } from 'next/font/google';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const lightTheme:ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3EAFD7',
    },
    secondary: {
      main: '#A1B652',
    },
    error: {
      main: '#CF5065',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default lightTheme;