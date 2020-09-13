import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  typography: {
    fontFamily: `'DM Sans', sans-serif`,
    regular: 400,
    bold: 700,
    h1: {
      size: '2.5rem',
      lineHeight: '3rem',
      letterSpacing: '4.17px',
    },
    h2: {
      size: '1.5rem',
      lineHeight: '1.5625rem',
      letterSpacing: 0,
    },
    h3: {
      size: '1.125rem',
      lineHeight: '1.5625rem',
      letterSpacing: 0,
    },
    h4: {
      size: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '2px',
    },
    body: {
      size: '0.9375rem',
      lineHeight: '1.5625rem',
      letterSpacing: 0,
    },
  },
  colors: {
    accent: 'linear-gradient(45deg, #ffc593 0%, #bc7198 50%, #5a77ff 100%)',
    black: '#000',
    white: '#fff',
    lightGrey: '#dfdfdf',
  },
};

export { theme };
