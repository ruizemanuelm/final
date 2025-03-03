"use client";
import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Group, Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./nav.module.css";

const links = [
  { link: "/", label: "Inicio" },
  { link: "/productos", label: "Productos" },
  { link: "#", label: "Carrito" },
  { link: "/contactos", label: "Contactanos" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={close} 
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        {/* Burger para abrir el menú en dispositivos pequeños */}
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        {/* Enlaces visibles en pantallas grandes */}
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>

        {/* Campo de búsqueda */}
        <Group visibleFrom="sm">
            <Button variant="default">Iniciar sesión</Button>
          </Group>

        <Drawer
          opened={opened}
          onClose={close}
          title="Menú"
          padding="md"
          hiddenFrom="sm"
        >
          {items}
        </Drawer>
      </div>
    </header>
  );
}
