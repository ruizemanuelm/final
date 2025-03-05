import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Image, Text } from "@mantine/core";
import classes from "./FooterSocial.module.css";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Image src="/images/logopng.png" alt="Login" width={70} height={70} />
        <Group
          gap={20}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={50} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={50} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={50} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
