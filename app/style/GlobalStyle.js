import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;
