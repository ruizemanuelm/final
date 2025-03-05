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
import { signIn, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/"); // Redirige si ya está autenticado
  }

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Intenta iniciar sesión
    const result = await signIn("credentials", {
      redirect: false,
      email,
      contrasena,
    });
  
    // Si hay un error en el login
    if (result.error) {
      setError("Error al iniciar sesión");
  
      // Muestra una alerta de error con SweetAlert2
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al iniciar sesión. Verifica tus datos.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      // Si el login es exitoso, redirige al usuario
      router.push("/");
  
      // Muestra una alerta de éxito con SweetAlert2
      Swal.fire({
        title: "Bienvenido",
        text: "Has iniciado sesión con éxito.",
        icon: "success",
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
