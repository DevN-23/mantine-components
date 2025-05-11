import Navbar from "@/components/Navbar";
import { AppShell, Burger, Group, ScrollArea, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg={"deepBlue"}>
        <Group h="100%" px="md">
          <Burger
            lineSize={2}
            size="sm"
            color={"white"}
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
          <Title order={1} m={0} c="gray.3">
            Logo
          </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section
          grow
          my="md"
          component={ScrollArea}
        >
          <Navbar />
        </AppShell.Section>
        <AppShell.Section>
          Navbar footer – always at the bottom
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      {/* <AppShell.Footer zIndex={"100"} p="md" bg={"deepBlue"}>
        <Text c="gray.3" size="sm">
          &copy; {new Date().getFullYear()} DevN-23. All rights reserved.
        </Text>
      </AppShell.Footer> */}
    </AppShell>
  );
}
