import { Button, Card, Overlay, Text } from '@mantine/core';
import classes from './hero.module.css';

export function Hero() {
  return (
    <Card className={classes.card}>
    <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

    <div className={classes.content}>
      <Text  fw={700} fz={{base:30, sm:50, md:90 }} className={classes.title}>
      Armá tu PC
      </Text>

      <Text size="sm" fz={15} className={classes.description}>
      Configurá tu nueva PC sin errores de compatibilidad, seleccionando todos los componentes que deseás.</Text>

      <Button className={classes.action} variant="white" color="dark" size="md">
        Ver mas
      </Button>
    </div>
  </Card>
  );
}