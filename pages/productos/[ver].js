import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Title,
  Text,
  Loader,
  Card,
  Image,
  Flex,
  Grid,
  Badge,
  Group,
  Button,
  Container,
  List,
  ThemeIcon,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { IconCheck } from "@tabler/icons-react";

const Ver = () => {
  const router = useRouter();
  const { ver } = router.query; // Captura el ID desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ver) return; // Evita ejecutar la solicitud si el ID no está disponible

    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${ver}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }

        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [ver]);

  console.log(producto);

  if (error) return <Text c="red">{error}</Text>;
  if (!producto) return <Text>No se encontró el producto</Text>;

  return (
    <>
      {loading ? (
        <Flex justify={"center"} align={"center"} h={"100%"}>
          <Loader size={"xl"} />
        </Flex>
      ) : (
        <Container mt={30} size={"lg"}>
          <Grid>
            <Grid.Col span={{base:12, sm:4}}>
              <Carousel
                withIndicators
                dragFree
                slideGap="md"
                align="start"
                h={"100%"}
              >
                {producto.imagenes.map((imagen, index) => (
                  <Carousel.Slide key={index}>
                    <Image h={300} src={imagen} alt={producto.nombre} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Grid.Col>
            <Grid.Col span={{base:12, sm:8}}>
              <Container size="md">
                <div>
                  <div>
                    <Title>{producto.nombre}</Title>
                    <Text c="dimmed" mt="md">
                      {producto.descripcion}
                    </Text>

                    <List
                      mt={30}
                      spacing="sm"
                      size="sm"
                      icon={
                        <ThemeIcon size={20} radius="xl" color={"grape.9"}>
                          <IconCheck size={12} stroke={1.5} />
                        </ThemeIcon>
                      }
                    >
                      <List.Item>
                        <b> Marca </b> {producto.marca}
                      </List.Item>
                      <List.Item>
                        <b> Cantidad disponible: </b> {producto.stock}
                      </List.Item>
                      <List.Item>
                        <b> Precio: </b> {producto.precio}
                      </List.Item>
                    </List>

                    <Group mt={50}>
                      <Button variant="default" radius="xs" size="md">
                        Cancelar
                      </Button>
                      <Button radius="xs" size="md" color="grape.9">
                        Agregar al carrito
                      </Button>
                    </Group>
                  </div>
                </div>
              </Container>
            </Grid.Col>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Ver;
