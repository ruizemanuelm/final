import React from "react";
import { Text, Button } from "@mantine/core";
import classes from "./formas-de-pago.module.css";

export default function FormasdePago() {
  const data = [
    {
        title: "Medios de pagos Online",
        tarjeta: "Tarjeta de debito/credito",
        tarjeta1: "MercadoPago",
        tarjeta2: "Tarjeta Visa 6 pagos sin interes",
        tarjeta3: "Tarjeta NaranjaX 6 pago sin interes plan Z",
    },
    {
      title: "Pagos Presencial",
      medios: "Bancos y otros Entes",
      medios1: "Rapipago y PagoFacil",
      medios2: "Por cajero Automatico Red Link o Red Banelco",
      medios3: "Cobro Express",
        
    },
    {
      title: "Recomendaciones antes de pagar",
      recomendacion: "Verificar la autenticacion de la pagina web",
      recomendacion1: "Verificar la existencia del candado de seguridad",
      recomendacion2: "Verificar los metodos de pagos que aparecen",
        
    },
  ];

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      {" "}
      <Text fz={"h3"} mb={30} className={classes.title}>
        {stat.title}
      </Text>{" "}
      <Text className={classes.count}>{stat.stats}</Text>{" "}
      <Text className={classes.description}>{stat.tarjeta}</Text>{" "}
      <Text className={classes.description}>{stat.tarjeta1}</Text>{" "}
      <Text className={classes.description}>{stat.tarjeta2}</Text>{" "}
      <Text className={classes.description}>{stat.tarjeta3}</Text>{" "}
      <Text className={classes.description}>{stat.medios}</Text>{" "}
      <Text className={classes.description}>{stat.medios1}</Text>{" "}
      <Text className={classes.description}>{stat.medios2}</Text>{" "}
      <Text className={classes.description}>{stat.medios3}</Text>{" "}
      <Text className={classes.description}>{stat.debito}</Text>{" "}
      <Text className={classes.description}>{stat.debito1}</Text>{" "}
      <Text className={classes.description}>{stat.debito2}</Text>{" "}
      <Text className={classes.description}>{stat.recomendacion}</Text>{" "}
      <Text className={classes.description}>{stat.recomendacion1}</Text>{" "}
      <Text className={classes.description}>{stat.recomendacion2}</Text>{" "}
      
      
    </div>
  ));

  return <div className={classes.root}>{stats}</div>;
}
