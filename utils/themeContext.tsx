
import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      setMode(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  // Sync with Tailwind and LocalStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Create MUI Theme based on current mode with refined palette
  const muiTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === 'light' ? '#1A252F' : '#88D8C0', // Light: stormy_teal-500, Dark: pearl_aqua-400
      },
      ...(mode === 'light' ? {
        background: {
          default: '#F0F8FF', // alice_blue-900
          paper: '#ffffff',   // Clean white for cards
        },
        text: {
          primary: '#2C3E50',   // stormy_teal-200
          secondary: '#465F75', // stormy_teal-300
        },
        divider: '#BFEFE8',     // pearl_aqua-300
      } : {
        background: {
          default: '#1A252F', // stormy_teal-500
          paper: '#2C3E50',   // stormy_teal-200
        },
        text: {
          primary: '#F0F8FF',   // alice_blue-900
          secondary: '#E1F0F7', // alice_blue-800
        },
        divider: '#465F75',     // stormy_teal-300
      }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
            ...(theme.palette.mode === 'light' ? {
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
              border: '1px solid #BFEFE8', // pearl_aqua-300
            } : {
              border: '1px solid #465F75', // stormy_teal-300
            }),
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...(theme.palette.mode === 'light' && {
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 4px 12px -2px rgba(136, 216, 192, 0.2)', // pearl_aqua soft glow
              },
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...(theme.palette.mode === 'light' ? {
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
              border: '1px solid #BFEFE8',
            } : {
              border: '1px solid #465F75', // stormy_teal-300
            }),
          }),
        },
      },
    },
    shape: {
      borderRadius: 8,
    }
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
