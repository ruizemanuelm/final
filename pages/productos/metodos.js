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
  Modal,
  TextInput,
  Select,
} from "@mantine/core";
import classes from "./compras.module.css";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const initialData = [
  {
    name: "Visa",
    description: "Banco hipotecario: **** 2520",
  },
  {
    name: "Naranja Visa",
    description: "Naranja: **** 6332",
  },
  {
    name: "Nueva Tarjeta de crédito",
  },
  {
    name: "Nueva Tarjeta de débito",
  },
  {
    name: "Efectivo en puntos de pago",
  },
];

function Metodos() {
  const router = useRouter();
  const [value, setValue] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [data, setData] = useState(initialData);
  const [modalOpened, setModalOpened] = useState(false);
  const [cuotasModalOpened, setCuotasModalOpened] = useState(false);
  const [newCardName, setNewCardName] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const [cuotas, setCuotas] = useState(1);
  const [totalConInteres, setTotalConInteres] = useState(0);

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
    if (value === "Nueva Tarjeta de crédito" || value === "Nueva Tarjeta de débito") {
      setModalOpened(true);
    } else if (value === "Visa" || value === "Naranja Visa") {
      setCuotasModalOpened(true);
    } else {
      Swal.fire({
        title: "Error",
        text: "Debes elegir una opción para continuar",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  const handleAddCard = () => {
    const formattedDescription = newCardDescription.replace(/\d{4}(?= \d{4})/g, "****");
    setData([...data, { name: newCardName, description: formattedDescription }]);
    setModalOpened(false);
    setNewCardName("");
    setNewCardDescription("");
  };

  const handleCardDescriptionChange = (event) => {
    let value = event.currentTarget.value.replace(/\s+/g, "").slice(0, 16);
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    setNewCardDescription(value);
  };

  const handleCuotasChange = (value) => {
    setCuotas(value);
    let interes = 0;
    if (value === "3") {
      interes = 0.10;
    } else if (value === "6") {
      interes = 0.20;
    } else if (value === "12") {
      interes = 0.30;
    }
    const total = precioTotal * (1 + interes);
    setTotalConInteres(total.toFixed(2));
  };

  const handleConfirmarCuotas = () => {
    Swal.fire({
      title: "Gracias por su compra",
      text: `Total a pagar: $${totalConInteres} en ${cuotas} cuotas`,
      icon: "success",
    }).then(() => {
      router.push("/productos");
    });
  };

  return (
    <>
      <Container my={30}>
        <Title ta={"center"}>Métodos de pago</Title>
        <Radio.Group
          ta={"center"}
          value={value}
          onChange={setValue}
          label="Elegí el metodo que mas te guste"
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

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Agregar nueva tarjeta"
      >
        <TextInput
          required
          label="Nombre de la tarjeta"
          placeholder="Ej. Visa"
          value={newCardName}
          onChange={(event) => setNewCardName(event.currentTarget.value)}
        />
        <TextInput
          required
          label="Numero de tarjeta"
          placeholder=""
          value={newCardDescription}
          onChange={handleCardDescriptionChange}
        />
        <Button color="grape.9" onClick={handleAddCard} mt="md">
          Agregar
        </Button>
      </Modal>

      <Modal
        opened={cuotasModalOpened}
        onClose={() => setCuotasModalOpened(false)}
        title="Seleccionar cuotas"
        precioTotal={precioTotal}
      >
        <Select
          label="Cuotas"
          placeholder="Selecciona el número de cuotas"
          defaultValue={"1"}
          data={[
            { value: "1", label: "En un pago" },
            { value: "3", label: "3 cuotas" },
            { value: "6", label: "6 cuotas" },
            { value: "12", label: "12 cuotas" },
          ]}
          value={cuotas}
          onChange={handleCuotasChange}
        />
        <Text fz="sm" mt="xs">
          Subtotal: ${precioTotal}
        </Text>
        <Text fz="xl"  c={"grape"}>
          Total con interés: ${totalConInteres}
        </Text>
        <Button color="grape.9" onClick={handleConfirmarCuotas} mt="md">
          Confirmar
        </Button>
      </Modal>
    </>
  );
}

export default Metodos;
