import {
    Button,
    Container,
    Flex,
    Image,
    List,
    SimpleGrid,
    Text,
    ThemeIcon,
    Title,
  } from "@mantine/core";
  import classes from "./carrito.module.css";
  import { IconCircleCheck } from "@tabler/icons-react";
  import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
  
  const Carrito = () => {
    const router = useRouter();
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        // Recupera el carrito desde los query params
        if (router.query.carrito) {
          const carritoRecibido = JSON.parse(router.query.carrito);
          setCarrito(carritoRecibido);
    
          // Calcula el precio total de los productos
          const total = carritoRecibido.reduce(
            (acc, item) => acc + parseFloat(item.precioTotal),
            0
          );
          setPrecioTotal(total.toFixed(2)); // Formatea a 2 decimales
        }
      }, [router.query.carrito]);

      console.log("carr",carrito);
      
    // const handleComprar = () => {
    //   Swal.fire({
    //     title: "¿Estás seguro que deseas realizar esta compra?",
    //     icon: "question",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Sí",
    //     cancelButtonText: "No",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire({
    //         title: "Gracias por tu compra",
    //         text: "Puedes retirarlo en nuestra sucursal: Santiago del estero 300, san Miguel de Tucuman",
    //         icon: "success",
    //   }).then(() => {
    //     router.push("/productos");
    //       });
    //     }
    //   });
    // };

    const handleComprar = () => {
      router.push("/productos/compras")
      router.push({
        pathname: "/productos/compras",
        query: { carrito: JSON.stringify(carrito) }, 
      });
    }
  
    return (
      <Container size={"lg"}>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Flex direction={"column"} justify={"center"} gap={30}>
            <Title className={classes.title} mt={30}>
              Preparando todo para tu compra
            </Title>
            <Text fw={500} fz="lg" mb={30}>
              Estos son los productos que elegiste
            </Text>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck size={16} />
                </ThemeIcon>
              }
            >
              {carrito.map((item) => (
          <List.Item key={item._id}>
            {item.nombre} x {item.cantidad} - ${item.precioTotal}
          </List.Item>
        ))}
            </List>
             {/* Contador para el precio total */}
      <Flex justify="flex-end" gap={10} align="center" mt={20}>
        <Text size="lg" fw={500}>
          Precio Total:
        </Text>
        <Text size="lg" color="pink.5" fw={700}>
           ${precioTotal}
        </Text>
      </Flex>
            <Button
              color="grape.9"
              w={"50%"}
              mt={30}
              fullWidth
              size="md"
              onClick={handleComprar}
            >
              Comprar
            </Button>
          </Flex>
  
          <Image w={"100%"} src={"../images/logo.jpeg"} />
        </SimpleGrid>
      </Container>
    );
  };
  
  export default Carrito;
  