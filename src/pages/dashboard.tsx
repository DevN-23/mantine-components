import Checkboxes from "@/components/Checkboxes";
import Chips from "@/components/Chips";
import CustomAngleSlider from "@/components/CustomAngleSlider";
import StepperFlow from "@/components/StepperFlow";
import { Divider } from "@mantine/core";

export default function Dashboard() {
  return (
    <>
      <StepperFlow />
      <Divider my="md" />
      <CustomAngleSlider />
      <Divider my="md" />
      <Checkboxes />
      <Divider my="md" />
      <Chips />
      <Divider my="md" />
    </>
  );
}
