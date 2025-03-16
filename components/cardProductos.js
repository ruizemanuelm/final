import { IconHeart, IconShoppingCart, IconEye } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Image,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import classes from "./cardProductos.module.css";

export function CardProductos({
  _id,
  imagen,
  nombre,
  descripcion,
  precio,
  agregarAlCarrito,  // Recibe la función como prop
}) {
  const theme = useMantineTheme();
  return (
    <Card withBorder radius="md" className={classes.card}>
      {/* Sección de imagen */}
      <Card.Section p={10} className={classes.image}>
        <Image title={nombre} src={imagen} height={180} alt={nombre} />
      </Card.Section>

      {/* Título del producto */}
      <Text fw={500} fz="lg" mt="sm" className={classes.title}>
        {nombre}
      </Text>

      {/* Descripción con truncado de texto */}
      <Text h={"100%"} fz="sm" c="dimmed" lineClamp={3} mt="xs" className={classes.description}>
        {descripcion}
      </Text>

      {/* Footer con precio y acciones */}
      <Group justify="space-between" className={classes.footer} mt="md">
        {/* Precio */} 
        <Text fw={700} fz="lg" color={theme.colors.grape[8]}>
          {precio}
        </Text>
        {/* Acciones con Tooltips */}
        <Group gap={8} mr={0}>
          <Tooltip label="Agregar al carrito" withArrow>
            <ActionIcon
              className={classes.action}
              variant="outline"
              onClick={() => agregarAlCarrito({ _id, imagen, nombre, descripcion, precio })} // Aquí se llama a la función
            >
              <IconShoppingCart size={18} color={theme.colors.grape[8]} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Ver producto" withArrow>
            <ActionIcon className={classes.action} variant="outline" component="a" href={`./productos/${_id}`}>
              <IconEye size={18} color={theme.colors.pink[4]} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}
