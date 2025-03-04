import {
  Anchor,
  Button,
  Center,
  Image,
  Paper,
  PasswordInput,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./login.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setcontrasena] = useState("");
  const [error, setError] = useState(null);

  console.log("error:", error);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contrasena }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login exitoso:", data);
        // Redirigir al usuario a otra página si es necesario
      } else {
        setError(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      setError("Error al conectar con el backend");
    }
  };

  return (
    <SimpleGrid
      className={classes.grid}
      cols={{ base: 1, md: 2 }}
      align="center"
    >
      <Image visibleFrom="md" src="/images/log.jpg" alt="Login" fit="cover" h={"auto"} />
      <Center>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Iniciar sesión
          </Title>

          <TextInput
            label="Email"
            size="md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Contraseña"
            mt="md"
            size="md"
             value={contrasena}
            onChange={(e) => setcontrasena(e.target.value)}
          />
          <Button fullWidth mt="xl" size="md" color={"grape"} onClick={handleLogin}>
            Iniciar sesión
          </Button>
          <Text ta="center" mt="md">
            No tienes cuenta? <Anchor href="/register">Regístrate</Anchor>
          </Text>
        </Paper>
      </Center>
    </SimpleGrid>
  );
};

export default Login;
