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
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

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

        localStorage.setItem("user", JSON.stringify(data.usuario)); 

        router.push("/"); 
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
            onChange={(e) => setContrasena(e.target.value)}
          />
          <Button fullWidth mt="xl" size="md" color={"grape"} onClick={handleLogin}>
            Iniciar sesión
          </Button>
          {error && <Text color="red" ta="center" mt="md">{error}</Text>}
          <Text ta="center" mt="md">
            No tienes cuenta? <Anchor href="/register">Regístrate</Anchor>
          </Text>
        </Paper>
      </Center>
    </SimpleGrid>
  );
};

export default Login;
