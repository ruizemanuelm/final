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

const Login = () => {
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
            placeholder="hello@gmail.com"
            size="md"
          />
          <PasswordInput
            label="Contraseña"
            placeholder="Your password"
            mt="md"
            size="md"
          />
          <Button fullWidth mt="xl" size="md" color={"grape"}>
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
