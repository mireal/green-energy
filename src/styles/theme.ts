import { ThemeOptions, createTheme } from '@mui/material/styles'
import React from 'react'

const breakpoints: ThemeOptions = {
  breakpoints: {
    values: {
      mobileP: 0,
      mobileL: 448,
      tablet: 728,
      desktopS: 960,
      desktopM: 1280,
      desktopL: 1440
    }
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobileP: true
    mobileL: true
    tablet: true
    desktopS: true
    desktopM: true
    desktopL: true
  }

  interface TypeColor {
    Darkest?: string
    Darker?: string
    Dark?: string
    Base?: string
    Light?: string
    Lighter?: string
    Lightest?: string
    White?: string
  }
  interface TypeText2 {
    primary: string
    secondary: string
    disabled: string
  }

  // interface PaletteOptions {
  // }

  interface TypographyVariants {
    navLink: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    navLink?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navLink: true
  }
}

const theme = createTheme({
  ...breakpoints,

  palette: {
    primary: {
      main: '#888888', // grey
      light: '#CFD7DE', //light grey
      dark: '#515151', //dark grey
      contrastText: '#FFFFFF' //white
    },
    secondary: {
      main: '#10466D', //dark blue
      light: '#2A6CA0', //light blue
      dark: '#1C1C1C' //black
    },
    background: {
      default: '#E4E9EC', //BG
      paper: '#10466D' //dark blue
    },
    text: {
      primary: '#000000',
      secondary: '#999999',
      disabled: '#C3C1BD'
    }
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',

    h1: {
      color: '#2A6CA0',
      fontWeight: '600',
      '@media (min-width:960px)': { fontSize: '58px' },
      '@media (max-width:959px)': { fontSize: '46px' },
      '@media (max-width:727px)': { fontSize: '28px' },
      '@media (max-width:447px)': { fontSize: '22px' }
    },

    h2: {
      color: '#2A6CA0',
      fontWeight: '600',
      '@media (min-width:728px)': { fontSize: '32px' },
      '@media (max-width:727px)': { fontSize: '22px' }
    },

    h3: {
      color: '#1C1C1C',
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '120%'
    },

    h4: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '127%'
    },

    body1: {
      fontSize: '16px',
      lineHeight: '130%'
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // ---CSS BODY--- \\
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          textDecoration: 'none',
          lineHeight: '16px',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            opacity: 0.8
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          aspectRatio: '1/1'
        }
      }
    }
  }
})

export default theme
