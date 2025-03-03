import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Card, Divider, Paper, Stack, Text, Title } from '@mantine/core';
import classes from './contactoslista.module.css';

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <>
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Title order={4} my={10} className={classes.title}>
          {title}
        </Title>
        <Text size='sm' className={classes.description}>{description}</Text>
      </div>
    </div>
        <Divider my="sm" />
    </>
  );
}

const MOCKDATA = [
  { title: 'Email', description: '@gmail.com', icon: IconAt },
  { title: 'Teléfono', description: '3814191638', icon: IconPhone },
  { title: 'Dirección', description: 'Santiago del estero 300', icon: IconMapPin },
  { title: 'Horarios de atención', description: '9:00 – 13:00 y 18:00 – 21:00', icon: IconSun },
];

export function ContactIconsList() {
  return <Paper bg={'grape.9'} p={20} radius={'md'}>{MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />)}</Paper>;
}
