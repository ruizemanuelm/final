import { Card, Center, Group, Text, useMantineTheme } from '@mantine/core';
import classes from './categorias.module.css';

export function Categorias() {

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://mantine.dev/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(/images/categorias/procesadores.jpg)`,}}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            Procesadores
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              Robert Gluesticker
            </Text>

            <Group gap="lg">

            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}