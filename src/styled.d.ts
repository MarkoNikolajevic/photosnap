import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      fontFamily: string;
      regular: number;
      bold: number;
      h1: {
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      h2: {
        size: string;
        lineHeight: string;
        letterSpacing: number;
      };
      h3: {
        size: string;
        lineHeight: string;
        letterSpacing: number;
      };
      h4: {
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      body: {
        size: string;
        lineHeight: string;
        letterSpacing: number;
      };
    };
    colors: {
      accent: string;
      black: string;
      white: string;
      lightGrey: string;
    };
  }
}
