import { Card, Group, SimpleGrid, Text } from '@mantine/core';
import classes from './categorias.module.css';

const categorias = [
  {
    titulo: 'Procesadores',
    imagen: '/images/categorias/procesadores.jpg',
    enlace: '/productos?tab=procesadores', 
  },
  {
    titulo: 'Monitores',
    imagen: '/images/categorias/monitor.jfif',
    enlace: '/productos?tab=monitores',
  },
  {
    titulo: 'Teclados',
    imagen: '/images/categorias/teclado.jfif',
    enlace: './productos?tab=teclados',
  },
  {
    titulo: 'Mouses',
    imagen: '/images/categorias/mouse.jfif',
    enlace: '/productos?tab=mouse',
  },
  {
    titulo: 'Notebooks',
    imagen: '/images/categorias/Notebook.jpg',
    enlace: '/productos?tab=notebooks',
  },
  {
    titulo: 'Auriculares',
    imagen: '/images/categorias/auriculares.jfif',
    enlace: '/productos?tab=auriculares',
  },
  {
    titulo: 'Gabinetes',
    imagen: '/images/categorias/gabinete.jfif',
    enlace: '/productos?tab=gabinetes',
  },
  {
    titulo: 'Almacenamiento',
    imagen: '/images/categorias/ram.jfif',
    enlace: '/productos?tab=almacenamiento',
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
