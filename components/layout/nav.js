"use client";
import { usePathname } from "next/navigation";
import {
  Burger,
  Group,
  Drawer,
  Button,
  Image,
  UnstyledButton,
  Avatar,
  Text,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./nav.module.css";
import { signOut, useSession } from "next-auth/react";
import { IconChevronRight, IconLogout } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const links = [
  { link: "/inicio", label: "Inicio" },
  { link: "/productos", label: "Productos" },
  { link: "/contactos", label: "Contactanos" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${
        pathname === link.link ? classes.active : ""
      }`} // Agrega la clase activa si está en esa página
      onClick={close}
    >
      {link.label}
    </a>
  ));

  const { data: session } = useSession();

  console.log("sess", session);
  const usuario = session?.user?.usuario;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

const cerrarSesion = async () => {
localStorage.removeItem("user");
router.push("/login"); 
};
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group hiddenFrom="sm">
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
        <Image
          src="/images/logopng.png"
          alt="Login"
          width={55}
          height={55}
          visibleFrom="sm"
        />
        {/* Burger para abrir el menú en dispositivos pequeños */}
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>

        {/* Campo de búsqueda */}
        <Group visibleFrom="sm">
          {user === null? (
            <Button variant="default" component="a" href="/login">
              Iniciar sesión
            </Button>
          ) : (
            <>
            <UnstyledButton>
              <Group>
                <Avatar color="initials" radius="xl" />
                <div style={{ flex: 1 }}>
                  <Text size="sm" fw={500}>
                    {user.nombre}
                  </Text>

                  <Text c="dimmed" size="xs">
                    {user.email}
                  </Text>
                </div>

              </Group>
            </UnstyledButton>
                <Tooltip label="Cerrar sesión">
                  <ActionIcon
                    variant="filled"
                    color="red"
                    size="lg"
                    radius="sm"
                    aria-label="logout"
                    onClick={() => cerrarSesion()}
                    >
                    <IconLogout
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                      />
                  </ActionIcon>
                </Tooltip>
          </>
          )}
        </Group>

        <Drawer
          opened={opened}
          onClose={close}
          title="Menú"
          padding="md"
          hiddenFrom="sm"
        >
          {items}
          <Group mt={50}>
            <Button variant="default" fullWidth component="a" href="/login">
              Iniciar sesión
            </Button>
          </Group>
        </Drawer>
      </div>
    </header>
  );
}
