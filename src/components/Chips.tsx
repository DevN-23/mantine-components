import { useState } from "react";
import { Chip, Space, Text, Title } from "@mantine/core";
import { IconX } from '@tabler/icons-react';

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
    </>
  );
}
