import '@mantine/core/styles.css';
import '../styles/globals.css'
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  weight: ['400','500','700'],
  subsets: ['latin'],
});

import { createTheme, MantineProvider } from '@mantine/core';
import { Navbar } from '../components/layout/nav';

const theme = createTheme({
  fontFamily: quicksand.style.fontFamily,
  headings: { fontFamily: quicksand.style.fontFamily },
  colors: {
    amarillo: ['#FFF4D6', '#FFE5A8', '#FFD77A', '#FFC84C', '#FFB91E', '#E1A113', '#B9810F', '#91610B', '#684107', '#402103'],
    rojo: ['#F8D7DA', '#F1AEB5', '#EA868F', '#E35D69', '#DC3545', '#971B2F', '#771524', '#58101A', '#380A0F', '#190506'],
    azul: ['#D6E8F5', '#A8C6E1', '#7AA5CD', '#4C83B9', '#1E62A5', '#004B81', '#003A66', '#002A4B', '#001A30', '#000915'],
  },
  primaryColor: 'azul', 
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
