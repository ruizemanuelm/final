import {
    Anchor,
    Button,
    Center,
    Grid,
    Image,
    Paper,
    PasswordInput,
    SimpleGrid,
    Text,
    TextInput,
    Title,
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import classes from "./register.module.css";
  import { useRouter } from "next/router";
  import Swal from "sweetalert2";
import { useState } from "react";
  
  const Register = () => {
    const form = useForm({
      initialValues: {
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
        direccion: "",
      },
  
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
        contrasena: (value) => (value.length >= 6 ? null : "Contraseña debe tener al menos 6 caracteres"),
      },
    });
  
    const [error, setError] = useState(null);
    const router = useRouter();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const handleRegister = async () => {
  
      try {
        const response = await fetch(`${baseUrl}api/users/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
          {  nombre: form.values.nombre,
            apellido: form.values.apellido,
            email: form.values.email,
            contrasena: form.values.contrasena,
            direccion: form.values.direccion}
          ),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || "Error en el registro");
        }
  
        Swal.fire({
          title: "Registro exitoso",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
  
        router.push("/login");
      } catch (error) {
        setError(error.message);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };
  
    return (
      <SimpleGrid className={classes.grid} cols={{ base: 1, md: 2 }} align="center">
        <Image
          visibleFrom="md"
          src="/images/logo.jpeg"
          alt="Registro"
          fit="cover"
          h={"auto"}
        />
        <Center>
          <Paper className={classes.form} radius={0}>
            <Title order={2} className={classes.title} ta="center" mb={50}>
              Registrarse
            </Title>
  
            <form onSubmit={form.onSubmit(handleRegister)}>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    label="Nombre"
                    size="md"
                    required
                    value={form.values.nombre}
                    onChange={(e) => form.setFieldValue("nombre", e.target.value)}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Apellido"
                    size="md"
                    required
                    value={form.values.apellido}
                    onChange={(e) => form.setFieldValue("apellido", e.target.value)}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <TextInput
                    label="Dirección"
                    mt="md"
                    size="md"
                    value={form.values.direccion}
                    onChange={(e) => form.setFieldValue("direccion", e.target.value)}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Email"
                    size="md"
                    required
                    value={form.values.email}
                    onChange={(e) => form.setFieldValue("email", e.target.value)}
                    error={form.errors.email}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <PasswordInput
                    label="Contraseña"
                    size="md"
                    type="number"
                    required
                    value={form.values.contrasena}
                    onChange={(e) => form.setFieldValue("contrasena", e.target.value)}
                    error={form.errors.contrasena}
                  />
                </Grid.Col>
  
                <Button
                  fullWidth
                  mt="xl"
                  size="md"
                  color={"grape"}
                  type="submit"
                >
                  Registrarse
                </Button>
              </Grid>
              {error && (
                <Text color="red" ta="center" mt="md">
                  {error}
                </Text>
              )}
              <Text ta="center" mt="md">
                ¿Ya tienes una cuenta?{" "}
                <Anchor href="/login">Inicia sesión</Anchor>
              </Text>
            </form>
          </Paper>
        </Center>
      </SimpleGrid>
    );
  };
  
  export default Register;
  