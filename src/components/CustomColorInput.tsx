import { ColorInput, ColorPicker, Space, Text } from "@mantine/core";

export default function CustomColorInput() {
  return (
    <>
      <Text>Color Input</Text>
      <ColorInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />
      <Space h="md" />
      <Text>Color Picker</Text>
      <CustomColorPicker />
      <Space h="md" />
    </>
  );
}

function CustomColorPicker() {
  return (
    <ColorPicker
      swatchesPerRow={6}
      format="hex"
      swatches={[
        "#2e2e2e",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14",
      ]}
    />
  );
}
