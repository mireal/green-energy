import { ThemeOptions, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const breakpoints: ThemeOptions = {
  breakpoints: {
    values: {
      mobileP: 0,
      mobileL: 448,
      tablet: 728,
      desktopS: 960,
      desktopM: 1280,
      desktopL: 1440,
    }
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileP: true;
    mobileL: true;
    tablet: true;
    desktopS: true;
    desktopM: true;
    desktopL: true;
  }

  interface TypeColor {
    Darkest?: string;
    Darker?: string;
    Dark?: string;
    Base?: string;
    Light?: string;
    Lighter?: string;
    Lightest?: string;
    White?: string;
  }
  interface TypeText2 {
    primary: string;
    secondary: string;
    disabled: string;
  }

  // interface PaletteOptions {
  // }

  interface TypographyVariants {
    CTA1: React.CSSProperties;
    
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    CTA1?: React.CSSProperties;
    
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    CTA1: true;
    
  }
}



export const AppThemeProvider: React.FC<Props> = ({ children }) => {

  const theme = responsiveFontSizes(
    createTheme({
      ...breakpoints,
      palette: {
        mode: 'light',
        primary: {
          main: '#1c9c7c',
        },
        secondary: {
          main: '#9DF3C4',
        },
        background: {
          default: "#E4E9EC",
          paper: "#10466D"
        },
        text: {
          primary: '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },
      },

      typography: {
        fontFamily: 'Dosis, sans-serif',

        h1: {
          fontSize: '26px',
          fontWeight: '600',
          // lineHeight: '33px',
        },
        h2: {
          fontSize: '22px',
          fontWeight: '600',
          // lineHeight: '28px',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
