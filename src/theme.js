import { createTheme } from '@mui/material/styles';

// Function to create theme based on mode (light or dark)
const theme = (mode = 'light') => createTheme({
  palette: {
    mode: mode,
    primary: {
      main: '#1976d2', // Blue color for primary
    },
    secondary: {
      main: '#1976d2', // Blue color for secondary (same as primary)
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#ffffff', // Dark mode vs Light mode background
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',  // Paper background for dark/light mode
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#000000', // Text color depending on mode
    },
  },
});

export default theme;
