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
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Ver = () => {
  const { data: session } = useSession(); // Usar el hook dentro de un componente funcional
  const router = useRouter();
  const { ver } = router.query; // Captura el ID desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const usuario = session?.user?.usuario;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  useEffect(() => {
    if (!ver) return; // Evita ejecutar la solicitud si el ID no está disponible

    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `${baseUrl}api/products/${ver}`
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

  if (error) return <Text c="red">{error}</Text>;
  if (!producto) return <Text>No se encontró el producto</Text>;


  const comprar = () => {
    const usuario = session?.user?.usuario;

    if (!usuario) {
      // Si el usuario no está autenticado, mostrar SweetAlert
      Swal.fire({
        title: "¿Deseas iniciar sesión para comprar?",
        text: "Para realizar la compra, necesitas estar logueado.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, ir al login",
        confirmButtonColor: "#862e9c",
        cancelButtonColor: "#d33",
        cancelButtonText: "No, seguir aquí",
      }).then((result) => {
        if (result.isConfirmed) {
          // Si elige "Sí", redirigir al login
          router.push("/login");
        } else {
          // Si elige "No", quedarse en la misma página
          Swal.fire("Permanezcas aquí", "Puedes seguir explorando el producto.", "info");
        }
      });
    } else {
      // Si el usuario está autenticado, proceder con la compra
      router.push(`/compras/${producto._id}`);
    }
  };

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
                      <Button variant="default" radius="xs" size="md" component="a" href="../productos">
                        Cancelar
                      </Button>
                      <Button radius="xs" size="md" color="grape.9" onClick={() => comprar()} >
                        Comprar ahora
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
