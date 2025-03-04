"use client";
import { usePathname } from "next/navigation";
import { Burger, Group, Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./nav.module.css";


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
      className={`${classes.link} ${pathname === link.link ? classes.active : ""}`} // Agrega la clase activa si está en esa página
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
            <Button variant="default" component="a" href="/login" >Iniciar sesión</Button>
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
            <Button variant="default" fullWidth component="a" href="/login" >Iniciar sesión</Button>
          </Group>
        </Drawer>
      </div>
    </header>
  );
}
