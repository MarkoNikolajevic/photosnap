import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: ${({ theme }) => theme.typography.fontFamily}
}
`;
