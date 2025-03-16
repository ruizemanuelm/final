import React, { useRef } from "react";
import {
  Paper,
  Group,
  Text,
  useMantineTheme,
  Image,
  Center,
} from "@mantine/core";
import Autoplay from 'embla-carousel-autoplay';
import { IconCreditCard, IconCash, IconCoin, IconFileDollar, IconMoodDollar } from "@tabler/icons-react";
import classes from "./cards-pagos.module.css";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

const data = [
  {
    title: "Mercado pago",
    description:
      "Realiza tus pagos de manera segura y rápida utilizando tu tarjeta de crédito o débito.",
    icon: IconCreditCard,
    color: "cyan",
    imagen:
      "https://seeklogo.com/images/M/mercado-pago-logo-18C70D8C77-seeklogo.com.png",
  },
  {
    title: "Visa",
    description:
      "Puedes realizar tus pagos en efectivo en cualquiera de nuestras sucursales.",
    icon: IconCash,
    color: "blue",
    imagen:
      "https://i.pinimg.com/originals/43/ed/1d/43ed1d4685a1e776836cf19557cfca73.png",
  },
  {
    title: "Macro",
    description:
      "Genera un recibo y paga en cualquier entidad bancaria o punto de pago autorizado.",
    icon: IconCoin,
    color: "gray",
    imagen:
      "https://www.uzzicollege.edu.ar/wp-content/themes/uzzi/images/macroclick.png",
  },
  {
    title: "Mastercard",
    description:
      "Genera un recibo y paga en cualquier entidad bancaria o punto de pago autorizado.",
    icon: IconFileDollar,
    color: "yellow",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
  },
  {
    title: "Naranja X",
    description:
      "Genera un recibo y paga en cualquier entidad bancaria o punto de pago autorizado.",
    icon: IconMoodDollar ,
    color: "orange",
    imagen:
      "https://sustentabilidad.naranjax.com/wp-content/uploads/2021/06/cropped-NX_favicon_colores.png",
  },
];

const CardsPagos = () => {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const features = data.map((item, index) => (
    <Carousel.Slide key={index}  >
    <Paper h={"100%"} withBorder p="xs" radius="md" className={classes.root}>
      <Group c={item.color} justify="space-between">
        <Text mb={10} size="md" className={classes.title}>
          {item.title}
        </Text>
        <item.icon size={30} stroke={1.5} />
      </Group>
      <Center>
        <Image title={"Tarjeta "+item.title} src={item.imagen} h={80} />
      </Center>
    </Paper>
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel my={20}
        height={150}
        slideSize={{ base: "100%", xs: "50%", md: "25%" }}
        slideGap="md"
        loop
        align="start"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {features}
      </Carousel>
    </>
  );
};

export default CardsPagos
