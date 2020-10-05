import { createGlobalStyle, css } from 'styled-components';

export const theme = {
  primary: '#FF4136',
  primaryDark: '#E00B00',
  secondary: '#888888',
  secondaryDark: '#777777',
  color: '#FFFCF9',
  backgroundColor: '#111111',
  backgroundColorDark: '#0a0a0a',
  backgroundColorLight: '#333333',
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
