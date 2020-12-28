import { ModalContextProvider } from '@context/Modal';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';
import Layout from '@components/Layout';
import ModalGroup from '@components/ModalGroup';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalContextProvider>
        <ModalGroup>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalGroup>
      </ModalContextProvider>
    </ThemeProvider>
  );
}
