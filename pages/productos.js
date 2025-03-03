import React from "react";
import { Tabs, Text, Title } from "@mantine/core";

const Productos = () => {
  
  return (
    <>
        <Tabs variant="pills" defaultValue="first"  my={20}>
      <Tabs.List grow justify="center">
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
    </>
  );
};

export default Productos;
