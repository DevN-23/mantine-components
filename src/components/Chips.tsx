import { useState } from "react";
import { Chip, Group, Space, Text, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export default function Chips() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Title order={4} c={"deepBlue"} mb={"md"}>
        Checkboxes
      </Title>
      <Chip defaultChecked>Awesome chip</Chip>
      <Space h="md" />
      <Text>Controlled Chip</Text>
      <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
        My chip
      </Chip>
      <Space h="md" />
      <Text>Change checked icon</Text>
      <Chip
        icon={<IconX size={16} />}
        color="red"
        variant="filled"
        defaultChecked
      >
        Forbidden
      </Chip>
      <Space h="md" />
      <ChipGroups />
    </>
  );
}

function ChipGroups() {
  return (
    <>
      <Text>Chip.Group</Text>
      <Chip.Group>
        <Group mt="md">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
