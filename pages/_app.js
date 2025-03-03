import '@mantine/core/styles.css';
import '../styles/globals.css'
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ weight: '400', subsets: ['latin'] });


import { createTheme, MantineProvider } from '@mantine/core';
import { Navbar } from '../components/layout/nav';
import { FooterSocial } from '../components/layout/footer';

const theme = createTheme({
  fontFamily: aldrich.style.fontFamily, // Aplica Aldrich como fuente principal
  headings: { fontFamily: aldrich.style.fontFamily }, // Aplica también a los encabezados
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Navbar/>
      <div className='main'>

      <Component {...pageProps} />
      </div>
      <FooterSocial/>
    </MantineProvider>
  );
}
