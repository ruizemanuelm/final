import React from "react";
import { Container, SimpleGrid, Tabs, Text, Title } from "@mantine/core";
import { CardProductos } from "../components/cardProductos";

const Productos = () => {
  const monitores = [
    {
      id: 1,
      imagen: "../images/destacados/Monitor_Lenovo_ThinkVision.jpg", // Reemplaza con una URL real
      titulo: "Monitor Gamer 27'' 144Hz",
      descripcion: "Monitor Full HD con tecnología IPS y tasa de refresco de 144Hz.",
      precio: "$110.250",
    },
    {
      id: 2,
      imagen: "https://via.placeholder.com/200",
      titulo: "Monitor Ultrawide 34''",
      descripcion: "Pantalla curva con resolución 3440x1440 y tecnología HDR.",
      precio: "$151.100",
    },
    {
      id: 3,
      imagen: "https://via.placeholder.com/200",
      titulo: "Monitor 4K 32''",
      descripcion: "Ideal para edición de video y diseño gráfico con resolución UHD.",
      precio: "$98.000",
    },
    {
      id: 4,
      imagen: "https://via.placeholder.com/200",
      titulo: "Monitor Oficina 24''",
      descripcion: "Pantalla LED Full HD con diseño sin bordes.",
      precio: "$180.000",
    },
  ];

  return (
    <Tabs color="grape.9" variant="default" defaultValue="monitores" my={50}>
      <Tabs.List grow justify="center" my={20}>
        <Tabs.Tab value="monitores">Monitores</Tabs.Tab>
        <Tabs.Tab value="gabinetes">Gabinetes</Tabs.Tab>
        <Tabs.Tab value="tarjetas-graficas">Tarjetas Gráficas</Tabs.Tab>
        <Tabs.Tab value="procesadores">Procesadores</Tabs.Tab>
        <Tabs.Tab value="teclados">Teclados</Tabs.Tab>
        <Tabs.Tab value="mouse">Mouse</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="monitores">
        <Title order={3}>Monitores</Title>
        <Text>Aquí puedes encontrar los mejores monitores para gaming y trabajo.</Text>
        <Container size={"xl"} my={20}>
          <SimpleGrid cols={4}>
            {monitores.map((monitor) => (
              <CardProductos key={monitor.id} {...monitor} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="gabinetes">
        <Title order={3}>Gabinetes</Title>
        <Text>Explora nuestra variedad de gabinetes para PC.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="tarjetas-graficas">
        <Title order={3}>Tarjetas Gráficas</Title>
        <Text>Descubre tarjetas gráficas de alto rendimiento para gaming y diseño.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="procesadores">
        <Title order={3}>Procesadores</Title>
        <Text>Encuentra procesadores potentes para tu PC.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="teclados">
        <Title order={3}>Teclados</Title>
        <Text>Teclados mecánicos, inalámbricos y más.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="mouse">
        <Title order={3}>Mouse</Title>
        <Text>Mouse ergonómicos y de alto rendimiento para gaming y oficina.</Text>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Productos;
