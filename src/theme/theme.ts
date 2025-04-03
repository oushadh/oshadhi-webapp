import { createTheme } from '@mui/material/styles';

// This is where you'll import your Figma design tokens
// You can replace these values with your actual design tokens
export const theme = createTheme({
  palette: {
    primary: {
      main: '#9583C4', // Darker lilac
      light: '#B4A7D6', // Medium lilac
      dark: '#7B6AAF', // Even darker lilac
    },
    secondary: {
      main: '#B7D1A4', // Pastel matcha
      light: '#D1E3C5', // Light matcha
      dark: '#9CB989', // Dark matcha
    },
    background: {
      default: '#FDFBFF', // Very light lilac tint
      paper: '#ffffff',
    },
    text: {
      primary: '#2C2738', // Dark purple-grey
      secondary: '#6E6D7A', // Medium purple-grey
    },
    grey: {
      50: '#F9F9FB',
      100: '#F3F0F9',
      200: '#E9E6F0',
      300: '#DCD8E5',
      400: '#B4B2BE',
      500: '#9391A0',
    }
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#2C2738',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#2C2738',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#2C2738',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#6E6D7A',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#9391A0',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    }
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8, // Base spacing unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
          fontSize: '0.875rem',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(180, 167, 214, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#B4A7D6',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#B4A7D6',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#2C2738',
          boxShadow: 'none',
          borderBottom: '1px solid #E9E6F0',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#B4A7D6',
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#B4A7D6',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#B4A7D6',
          '&.Mui-checked': {
            color: '#B4A7D6',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
          border: '1px solid #F3F4F6',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 500,
          padding: '8px 16px',
        },
      },
    },
    // Add more component customizations from your Figma design
  },
}); 