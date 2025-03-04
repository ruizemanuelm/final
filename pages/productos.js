import React, { useEffect, useState } from "react";
import { Container, SimpleGrid, Tabs, Text, Title } from "@mantine/core";
import { CardProductos } from "../components/cardProductos";
import { useRouter } from "next/router";


const Productos = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("monitores");
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("No se pudieron obtener los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

 // Función que verifica si hay productos para la categoría activa
 const getFilteredProducts = () => {
  if (productos.length > 0) {
    return productos.filter(
      (product) => product.categoria.titulo.toLowerCase() === activeTab
    );
  } else {
    return []; // Si no hay productos, retorna un array vacío
  }
};

const filteredProducts = getFilteredProducts();   

  useEffect(() => {
    const { tab } = router.query;
    if (tab) {
      setActiveTab(tab);
    }
  }, [router.query]);

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
          {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="gabinetes">
        <Title ta={"center"} order={3}>Gabinetes</Title>
        <Text ta={"center"}>Explora nuestra variedad de gabinetes para PC.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="memorias-ram">
      <Title ta={"center"} order={3}>Memorias Ram</Title>
      <Text ta={"center"}>Encuentra las mejores memorias RAM para tu PC.</Text>
      <Container size="xl" my={20}>
        <SimpleGrid cols={4}>
          {filteredProducts.map((product) => (
            <CardProductos key={product._id} {...product} />
          ))}
        </SimpleGrid>
      </Container>
    </Tabs.Panel>

      <Tabs.Panel value="procesadores">
        <Title ta={"center"} order={3}>Procesadores</Title>
        <Text ta={"center"}>Encuentra procesadores potentes para tu PC.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="teclados">
        <Title ta={"center"} order={3}>Teclados</Title>
        <Text ta={"center"}>Teclados mecánicos, inalámbricos y más.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>

      <Tabs.Panel value="mouse">
        <Title ta={"center"} order={3}>Mouses</Title>
        <Text ta={"center"}>Mouse ergonómicos y de alto rendimiento para gaming y oficina.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>
      <Tabs.Panel value="auriculares">
        <Title ta={"center"} order={3}>Auriculares</Title>
        <Text ta={"center"}>Auriculares de alta calidad para gaming y música.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>
      <Tabs.Panel value="notebooks">
        <Title ta={"center"} order={3}>Notebooks</Title>
        <Text ta={"center"}>Encuentra notebooks de última generación.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>
      <Tabs.Panel value="almacenamiento">
        <Title ta={"center"} order={3}>Almacenamiento</Title>
        <Text ta={"center"}>Almacenamiento SSD, HDD y más.</Text>
        <Container size="xl" my={20}>
          <SimpleGrid cols={4}>
            {filteredProducts.map((product) => (
              <CardProductos key={product._id} {...product} />
            ))}
          </SimpleGrid>
        </Container>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Productos;
