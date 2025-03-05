import '@mantine/core/styles.css';
import '../styles/globals.css';
import { Aldrich } from 'next/font/google';
import { createTheme, MantineProvider } from '@mantine/core';
import { Navbar } from '../components/layout/nav';
import { FooterSocial } from '../components/layout/footer';
import { SessionProvider } from "next-auth/react";

const aldrich = Aldrich({ weight: '400', subsets: ['latin'] });

const theme = createTheme({
  fontFamily: aldrich.style.fontFamily,
  headings: { fontFamily: aldrich.style.fontFamily },
});

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Navbar />
        <div className='main'>
          <Component {...pageProps} />
        </div>
        <FooterSocial />
      </MantineProvider>
    </SessionProvider>
  );
}
