import {
  Button,
  Fieldset,
  FileInput,
  JsonInput,
  Group,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export default function CustomFieldset() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      <Fieldset legend="Personal information" disabled={isDisabled}>
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput label="Email" placeholder="Email" mt="md" />
        <FileInput
          mt="md"
          accept="image/png,image/jpeg"
          label="Upload files"
          placeholder="Upload files"
        />
        <JsonInput
          value={value}
          onChange={setValue}
          defaultValue='{ "a": 1, "B": 2 }'
          mt="md"
          label="Your json"
          placeholder="Textarea will autosize to fit the content"
          validationError="Invalid JSON"
          formatOnBlur
          autosize
          minRows={4}
        />
        <Group justify="flex-end" mt="md">
          <Button>Submit</Button>
        </Group>
      </Fieldset>
      <Button
        variant="outline"
        mt={"md"}
        onClick={() => setIsDisabled(!isDisabled)}
      >
        Toggle Disabled
      </Button>
    </>
  );
}
