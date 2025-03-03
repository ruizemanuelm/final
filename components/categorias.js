import { Card, Group, SimpleGrid, Text } from '@mantine/core';
import classes from './categorias.module.css';

const categorias = [
  {
    titulo: 'Procesadores',
    imagen: '/images/categorias/procesadores.jpg',
    enlace: 'https://mantine.dev/',
  },
  {
    titulo: 'Monitores',
    imagen: '/images/categorias/monitor.jfif',
    enlace: 'https://mantine.dev/',
  },
  {
    titulo: 'Teclados',
    imagen: '/images/categorias/teclado.jfif',
    enlace: 'https://mantine.dev/',
  },
  {
    titulo: 'Mouses',
    imagen: '/images/categorias/mouse.jfif',
    enlace: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    titulo: 'Notebooks',
    imagen: '/images/categorias/Notebook.jpg',
    enlace: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    titulo: 'Auriculares',
    imagen: '/images/categorias/auriculares.jfif',
    enlace: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    titulo: 'Gabinetes',
    imagen: '/images/categorias/gabinete.jfif',
    enlace: 'XXXXXXXXXXXXXXXXXXXX',
  },
  {
    titulo: 'Almacenamiento',
    imagen: '/images/categorias/ram.jfif',
    enlace: 'XXXXXXXXXXXXXXXXXXXX',
  },
];

export function Categorias() {
  return (
    <SimpleGrid cols={{ base: 1,sm:2, md: 4 }} gap="lg">
      {categorias.map((categoria, index) => (
        <Card
          key={index}
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="md"
          component="a"
          href={categoria.enlace}
          target="_blank"
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${categoria.imagen})`,
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div>
              <Text size="lg" className={classes.title} fw={500}>
                {categoria.titulo}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  );
}
