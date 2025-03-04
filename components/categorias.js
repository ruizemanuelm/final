import { Card, Group, SimpleGrid, Text } from '@mantine/core';
import classes from './categorias.module.css';
import { use, useEffect, useState } from 'react';


export function Categorias() {
  const [categorias , setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
console.log("categorias:", categorias);

  return (
    <SimpleGrid cols={{ base: 1,sm:2, md: 4 }} gap="lg">
      {categorias.map((categoria, index) => (
        <Card
        display={categoria.titulo == "Almacenamiento" ? "none": "block"}
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
