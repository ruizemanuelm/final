import { useState, useEffect } from "react";
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

const data = [
  {
    name: "Visa",
    description: "Banco hipotecario: **** 2520",
  },
  {
    name: "Naranja Visa",
    description: "Naranja: **** 6332",
  },
  {
    name: "Nueva Tarjeta de crédito"},
  { name: "Nueva Tarjeta de débito"},
  { name: "Efectivo en puntos de pago"}
];

function Metodos() {
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

      const handleComprar = () => {
        Swal.fire({
          title: "¿Estás seguro que deseas realizar esta compra?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Gracias por tu compra",
              text: "Puedes retirarlo en nuestra sucursal: Santiago del estero 300, san Miguel de Tucuman",
              icon: "success",
        }).then(() => {
          router.push("/productos");
            });
          }
        });
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
          <Button onClick={handleComprar} color="grape.9">Confirmar</Button>
        </Flex>
      </Container>
    </>
  );
}

export default Metodos;
