import { createGlobalStyle, css } from 'styled-components';

export const theme = {
  primary: '#F1894C',
  primaryDark: '#DD664B',
  secondary: '#5B8FFB',
  secondaryDark: '#4774d6',
  color: '#F7F7FA',
  backgroundColor: '#141C2E',
  backgroundColorDark: '#0e1324',
  backgroundColorLight: '#304066',
};

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
    }

    body {
      background-color: ${theme.backgroundColor};
      color: ${theme.color};
    }

    a {
      text-decoration: inherit;
      color: inherit;
    }
  `}
`;
