import { Button, Container, Divider, Flex, Group, SimpleGrid, Title } from "@mantine/core";
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
              productos destacados
            </Title>
            <CardsInicio />
            </Container>
            <Hero/>
            <Divider my={30} label="Categorías" labelPosition="center" />
            <Container fluid>
                <Flex justify={"space-between"} align={"center"}>

            <Title ta={"center"} order={1}>
              Categorías
            </Title>
            <Button variant="outline" color="blue">Ver todas</Button>
            </Flex>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" my={20}>
              <Categorias />
              <Categorias />
              <Categorias />
              <Categorias />
            </SimpleGrid>
          </Container >
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