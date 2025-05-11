import { useState } from "react";
import { AngleSlider, Text, Title } from "@mantine/core";

export default function CustomAngleSlider() {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  return (
    <>
      <Title order={4} c={"deepBlue"} mb={"md"}>
        Angle Slider
      </Title>
      <AngleSlider
        formatLabel={(value) => `${value}°`}
        c={"deepBlue"}
        value={value}
        onChange={setValue}
        onChangeEnd={setEndValue}
        aria-label="Angle slider"
        size={50}
        thumbSize={12}
        withLabel={true}
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>End value: {endValue}</Text>
    </>
  );
}
