import Checkboxes from "@/components/Checkboxes";
import Chips from "@/components/Chips";
import CustomAlert from "@/components/CustomAlert";
import CustomAngleSlider from "@/components/CustomAngleSlider";
import CustomColorInput from "@/components/CustomColorInput";
import CustomFieldset from "@/components/CustomFieldset";
import CustomNotification from "@/components/CustomNotification";
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
      <CustomColorInput />
      <Divider my="md" />
      <CustomFieldset />
      <Divider my="md" />
      <CustomAlert />
      <Divider my="md" />
      <CustomNotification />
      <Divider my="md" />
    </>
  );
}
