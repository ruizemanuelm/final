import { Carousel } from "@mantine/carousel";
import { Card, Image, Text } from "@mantine/core";
import "@mantine/carousel/styles.css";
import classes from "./carrusel-landing.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const mockdata = [
  {
    image: "/images/slider/slider1.jpg",
    title: "Slide 1",
    description: "Description for slide 1",
  },
  
  {
    image: "/images/slider/slider2.jpg",
    title: "Slide 3",
    description: "Description for slide 3",
  },
];

const CarruselLanding = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      height={300}
      slideSize="100%"
      slideGap="md"
      align="start"
      slidesToScroll={1}
    >
      {mockdata.map((item, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={item.image}
            alt={item.title}
            className={classes.carouselImage}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarruselLanding;
