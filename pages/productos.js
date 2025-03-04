import React, { useEffect, useState } from "react";
import { Container, SimpleGrid, Tabs, Text, Title } from "@mantine/core";
import { CardProductos } from "../components/cardProductos";
import { useRouter } from "next/router";


const Productos = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("monitores");

  useEffect(() => {
    const { tab } = router.query;
    if (tab) {
      setActiveTab(tab);
    }
  }, [router.query]);

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
    <Tabs color="grape.9" variant="default" value={activeTab} my={50}>
      <Tabs.List grow justify="center" my={20}>
        <Tabs.Tab value="monitores" onClick={() => router.push('/productos?tab=monitores')}>Monitores</Tabs.Tab>
        <Tabs.Tab value="gabinetes" onClick={() => router.push('/productos?tab=gabinetes')}>Gabinetes</Tabs.Tab>
        <Tabs.Tab value="memorias-ram" onClick={() => router.push('/productos?tab=memorias-ram')}>Memorias ram</Tabs.Tab>
        <Tabs.Tab value="procesadores" onClick={() => router.push('/productos?tab=procesadores')}> Procesadores</Tabs.Tab>
        <Tabs.Tab value="teclados" onClick={() => router.push('/productos?tab=teclados')}> Teclados</Tabs.Tab>
        <Tabs.Tab value="mouse" onClick={() => router.push('/productos?tab=mouse')}> Mouse</Tabs.Tab>
        <Tabs.Tab value="auriculares" onClick={() => router.push('/productos?tab=auriculares')}>Auriculares</Tabs.Tab>
        <Tabs.Tab value="notebooks" onClick={() => router.push('/productos?tab=notebooks')}>Notebook</Tabs.Tab>
        <Tabs.Tab value="almacenamiento" onClick={() => router.push('/productos?tab=almacenamiento')}>Almacenamiento</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="monitores">
        <Title ta={"center"} order={3}>Monitores</Title>
        <Text ta={"center"}>Aquí puedes encontrar los mejores monitores para gaming y trabajo.</Text>
        <Container size={"xl"} my={20}>
          <SimpleGrid cols={4}>
            {monitores.map((monitor) => (
              <CardProductos key={monitor.id} {...monitor} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="gabinetes">
        <Title ta={"center"} order={3}>Gabinetes</Title>
        <Text ta={"center"}>Explora nuestra variedad de gabinetes para PC.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="memorias-ram">
      <Title ta={"center"} order={3}>Memorias Ram</Title>
      <Text ta={"center"}>Encuentra las mejores memorias RAM para tu PC.</Text>
    </Tabs.Panel>

      <Tabs.Panel value="procesadores">
        <Title ta={"center"} order={3}>Procesadores</Title>
        <Text ta={"center"}>Encuentra procesadores potentes para tu PC.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="teclados">
        <Title ta={"center"} order={3}>Teclados</Title>
        <Text ta={"center"}>Teclados mecánicos, inalámbricos y más.</Text>
      </Tabs.Panel>

      <Tabs.Panel value="mouse">
        <Title ta={"center"} order={3}>Mouse</Title>
        <Text ta={"center"}>Mouse ergonómicos y de alto rendimiento para gaming y oficina.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="auriculares">
        <Title ta={"center"} order={3}>Auriculares</Title>
        <Text ta={"center"}>Auriculares de alta calidad para gaming y música.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="notebooks">
        <Title ta={"center"} order={3}>Notebooks</Title>
        <Text ta={"center"}>Encuentra notebooks de última generación.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="almacenamiento">
        <Title ta={"center"} order={3}>Almacenamiento</Title>
        <Text ta={"center"}>Almacenamiento SSD, HDD y más.</Text>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Productos;
