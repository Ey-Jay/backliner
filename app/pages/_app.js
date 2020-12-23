import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

import Layout from '@components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
