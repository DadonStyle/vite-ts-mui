import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface Palette {
    gradient: TypeGradient;
    white: TypeColor;
    blue: TypeColor;
    black: TypeColor;
    text: TypeText2;
  }
  // belongs to Platte interface
  interface TypeColor {
    light?: string;
    lightest?: string;
    main?: string;
    black1?: string;
    black2?: string;
  }
  // belongs to Platte interface
  interface TypeText2 {
    primary: string;
    secondary: string;
    disabled: string;
  }
  // belongs to Platte interface
  interface PaletteOptions {
    gradient: TypeGradient;
    white: TypeColor;
    blue: TypeColor;
    black: TypeColor;
  }

  // belongs to Platte interface (background option is commented)
  // interface TypeBackground {
  //   opposite: string;
  // }

  // this is for the create theme
  interface TypographyVariants {
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1: true;
    body2: true;
  }
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: {
          main: 'rgba(19, 77, 228, 1)',
        },
        secondary: {
          main: 'rgba(188, 213, 255, 1)',
        },
        white: {
          main: 'rgb(255,255,255)',
          lightest: 'rgba(248, 248, 248, 1)',
          light: 'rgba(244, 247, 255, 1)',
        },
        blue: {
          light: 'rgba(188, 213, 255, 1)',
          main: 'rgba(19, 77, 228, 1)',
        },
        black: {
          main: 'rgb(0,0,0)',
          black1: 'rgba(5, 37, 78, 1)',
          black2: 'rgba(5, 25, 51, 1)',
        },
        // background: {
        //   default: mode === 'dark' ? '#000000' : '#FCFBFA',
        //   opposite: mode === 'dark' ? '#FCFBFA' : '#000000',
        //   paper: mode === 'dark' ? '#131313' : '#FCFCFC',
        // },
        text: {
          primary: '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },
        gradient: {
          blue: 'linear-gradient(180deg, #00419C 0%, #0F69E8 100%)',
        },
      },
      typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
          fontSize: '20px',
          fontWeight: '700',
        },
        h2: {
          fontSize: '18px',
          fontWeight: '700',
        },
        h3: {
          fontSize: '14px',
          fontWeight: '700',
          // lineHeight: '25px',
        },
        h4: {
          fontSize: '12px',
          fontWeight: '700',
          // lineHeight: '25px',
        },
        body1: {
          fontSize: '14px',
          fontWeight: '500',
          // lineHeight: '16px',
        },
        body2: {
          fontSize: '12px',
          fontWeight: '500',
          // lineHeight: '16px',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
              direction: 'rtl',
              fontFamily: 'Inter, sans-serif',
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
