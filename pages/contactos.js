import {
  Button,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import classes from "./contactos.module.css";
import { ContactIconsList } from "../components/contactoslista";
import Swal from "sweetalert2";

const Contactos = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtén los valores de los campos del formulario
    const form = event.target;
    const nombre = form.elements["nombre"].value;
    const apellido = form.elements["apellido"].value;
    const email = form.elements["email"].value;

    Swal.fire({
      icon: "success",
      title: "¡Gracias por comunicarte con nosotros!",
      text: `Hola ${nombre} ${apellido}, hemos recibido tu mensaje. ¡Nos pondremos en contacto contigo pronto!`,
      confirmButtonColor: "#8e44ad",
    }).then(() => {
      form.reset();
    });
  };

  return (
    <>
    <Image
      radius="md"
      src="./images/contactos.jpg"
      alt="Contacto"
      h={260}
    />
    <Container my={30} size="lg" mt={20}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>

          <ContactIconsList />

          <form
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Contáctanos
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Nombre" name="nombre" placeholder="" required/>
                <TextInput label="Apellido" name="apellido" placeholder="" required/>
                <TextInput type="number" name="telefono" label="Teléfono" placeholder="" required />
                <TextInput type="email" name="email" label="Email" placeholder="" required />
              </SimpleGrid>

              <Textarea
                mt="md"
                label="Escriba un mensaje"
                placeholder=""
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" color={"grape.9"} className={classes.control}>
                  Enviar
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
      </Container>
    </>
  );
};

export default Contactos;
