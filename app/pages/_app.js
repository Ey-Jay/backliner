import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
