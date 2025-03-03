import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './cardsInicio.module.css';

const mockdata = [
  {
    title: 'Teclado Mecanico Redragon K550 Yama White Switch Purple RGB',
    image:
    './images/destacados/Teclado_Mecanico_Redragon.jpg',
  precio: '$ 72.940',
  },
  {
    title: 'Mother ASUS TUF B450M-PLUS II AM4',
    image:
      './images/destacados/Mother_ASUS_TUF_B450M.jpg',
    precio: '$ 123.990',
  },
  {
    title: 'Monitor Lenovo ThinkVision S22i-30 21.5" FHD IPS 75Hz Anti Glare VESA',
    image:
    './images/destacados/Monitor_Lenovo_ThinkVision.jpg',
  precio: '$ 151.860',
  },
  {
    title: 'Notebook Lenovo IdeaPad Slim 3 15IAN8 15.6" FHD i3-N305 8GB 256GB SSD Nvme Win11 Arctic Grey',
    image:
    './images/destacados/Notebook_Lenovo_IdeaPad.jpg',
  precio: '$ 499.000',
  },
  {
    title: 'Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler',
    image:
    './images/destacados/Procesador_AMD_.jpg',
  precio: '$ 75.500',
  },
  {
    title: 'Disco Sólido SSD WD 480GB GREEN 545MB/s SATA',
    image:
    './images/destacados/Disco_S__lido_SSD_WD_480GB.jpg',
  precio: '$ 34.300',
  },
];

export function CardsInicio() {
  const cards = mockdata.map((article) => (
    <Card shadow='sm' key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text h={"80%"} className={classes.title} mt={5}>
        {article.title}
      </Text>
      <Text ta={"end"} c="grape" size="md" fw={700} mt="md">
        {article.precio}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>{cards}</SimpleGrid>
    </Container>
  );
}