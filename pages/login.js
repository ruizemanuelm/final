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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); 
      }
    }, []); 

  if (user != null) {
    router.push("/");
  }
 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    // Realiza el fetch hacia el backend
    const response = await fetch(`${baseUrl}api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        contrasena: contrasena,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al iniciar sesión");
    }

    // Guardar los datos del usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(data.usuario));  // Asumiendo que `data.user` contiene la info del usuario

    // Mostrar alerta de éxito
    Swal.fire({
      title: "Bienvenido",
      text: "Has iniciado sesión con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    router.push("/");

  } catch (error) {
    setError(error.message);
    Swal.fire({
      title: "Error",
      text: error.message || "No se pudo iniciar sesión. Por favor, inténtalo de nuevo.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
};

  return (
    <SimpleGrid
      className={classes.grid}
      cols={{ base: 1, md: 2 }}
      align="center"
    >
      <Image visibleFrom="md" src="/images/logo.jpeg" alt="Login" fit="cover" h={"auto"} />
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
