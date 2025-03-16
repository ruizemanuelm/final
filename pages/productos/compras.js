import { useEffect, useState } from "react";
import {
  Radio,
  Group,
  Stack,
  Text,
  Container,
  Title,
  Button,
  Flex,
} from "@mantine/core";
import classes from "./compras.module.css";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const data = [
  {
    name: "Envío a domicilio",
    description: "Emilio Castelar 1809",
  },
  {
    name: "Retira en nuestro local",
    description: "Santiago del estero 300 - San Miguel de Tucuman",
  },
  { name: "Retiro en el correo", description: "Gral. Jose de San Martin 1175" },
];

function Compras() {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const cards = data.map((item) => (
    <Radio.Card
      className={classes.root}
      radius="md"
      value={item.name}
      key={item.name}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator color={"grape.9"} />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  useEffect(() => {
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

  console.log("carr", carrito);

  const handleComprar = () => {
    if (value) {
      router.push({
        pathname: "/productos/metodos",
        query: { carrito: JSON.stringify(carrito) }, 
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Debes elegir una opción para continuar",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <>
      <Container my={30}>
        <Title ta={"center"}>Elegí la forma de entrega </Title>

        <Radio.Group
          ta={"center"}
          value={value}
          onChange={setValue}
          label="Los productos pueden llegar a tu casa con un simple click"
          description=""
        >
          <Stack pt="md" gap="xs">
            {cards}
          </Stack>
        </Radio.Group>

        <Flex justify={"flex-end"} align={"flex-end"} gap={15}>
          <Text fz="xl" mt="md">
            Total a pagar: ${precioTotal}
          </Text>
          <Button onClick={handleComprar} color="grape.9">
            Confirmar
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default Compras;
