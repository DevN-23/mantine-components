import { useState } from "react";
import { Checkbox, Stack, Title, Group, Text } from "@mantine/core";
import { useListState, randomId } from "@mantine/hooks";
import classes from "./checkbox.module.css";

const initialValues = [
  { label: "Receive email notifications", checked: false, key: randomId() },
  { label: "Receive sms notifications", checked: false, key: randomId() },
  { label: "Receive push notifications", checked: false, key: randomId() },
];

export default function Checkboxes() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  return (
    <Stack>
      <Title order={4} c={"deepBlue"} mb={"md"}>
        Checkboxes
      </Title>
      <DifferentTypesCheckboxes />
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}

      <CheckboxCard />
    </Stack>
  );
}

function CheckboxCard() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
    className={classes.root}
      p={"md"}
      my={"md"}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>Core components library: inputs, buttons, overlays, etc.</Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}

function DifferentTypesCheckboxes() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Default checkbox"
      />
      <Checkbox
        indeterminate={checked2}
        onChange={() => setChecked2(!checked2)}
        label="Indeterminate checkbox"
      />
      <Checkbox
        checked={checked3}
        onChange={() => setChecked3(!checked3)}
        label="Checked checkbox"
      />
      <Checkbox
        checked={checked4}
        onChange={() => setChecked4(!checked4)}
        variant="outline"
        label="Outline checked checkbox"
      />
      <Checkbox
        variant="outline"
        indeterminate={checked5}
        onChange={() => setChecked5(!checked5)}
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox
        disabled
        checked={checked6}
        onChange={() => setChecked6(!checked6)}
        label="Disabled checked checkbox"
      />
      <Checkbox
        checked={checked7}
        onChange={() => setChecked7(!checked7)}
        disabled
        indeterminate
        label="Disabled indeterminate checkbox"
      />
    </Stack>
  );
}
