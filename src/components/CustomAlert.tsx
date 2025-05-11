import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export default function CustomAlert() {
  const icon = <IconInfoCircle />;
  return (
    <Alert variant="light" color="blue" title="Alert title" icon={icon} withCloseButton>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
    </Alert>
  );
}