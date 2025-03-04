import {
  Button,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Title,
} from "@mantine/core";
import "@mantine/carousel/styles.css";
import CarruselLanding from "../components/carrusel-landing";
import { CardsInicio } from "../components/cardsInicio";
import { Categorias } from "../components/categorias";
import { Hero } from "../components/hero";
import CardsPagos from "../components/cards-pagos";
import FormasdePago from "../components/formas-de-pago";

export default function Landing() {
  return (
    <>
      <CarruselLanding />
      <Container fluid>
        <Title my={20} ta={"center"} order={1}>
          Productos destacados
        </Title>
        <CardsInicio />
      </Container>
      <Hero />
      <Divider my={20} label="Categorías" labelPosition="center" />
      <Container fluid>
        <Flex justify={"space-between"} align={"center"} mb={20}>
          <Title ta={"center"} order={1}>
            Categorías
          </Title>
          <Button variant="filled" color="grape.9" component="a" href="/productos">
            Ver todas
          </Button>
        </Flex>
          <Categorias />
      </Container>
      <Divider my={30} label="Métodos de pago" labelPosition="center" />
      <Title my={30} ta={"center"} order={1}>
        Métodos de pago
      </Title>
      <FormasdePago />
      <Container size={"lg"}>
        <Divider my={30} label="Formas de pago" labelPosition="center" />
        <CardsPagos />
      </Container>
    </>
  );
}
