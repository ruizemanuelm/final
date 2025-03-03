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

export function CardProductos({ imagen, titulo, descripcion, precio }) {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      {/* Sección de imagen */}
      <Card.Section p={10} className={classes.image}>
        <Image src={imagen} height={180} alt={titulo} />
      </Card.Section>

      {/* Badge de categoría */}
      <Badge
        variant="gradient"
        gradient={{ from: "grape", to: "pink" }}
        className={classes.rating}
      >
        Nuevo
      </Badge>

      {/* Título del producto */}
      <Text fw={500} fz="lg" mt="sm" className={classes.title}>
        {titulo}
      </Text>

      {/* Descripción con truncado de texto */}
      <Text fz="sm" c="dimmed" lineClamp={3} mt="xs" className={classes.description}>
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
            <ActionIcon className={classes.action} variant="outline">
              <IconShoppingCart size={18} color={theme.colors.grape[8]} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label="Ver producto" withArrow>
            <ActionIcon className={classes.action} variant="outline">
              <IconEye size={18} color={theme.colors.pink[4]} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}
