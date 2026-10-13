import { useState } from "react";
import { SwitchField } from "~/client/components/ui/switch-field";

export default function SwitchFieldDemo() {
  const [checked, setChecked] = useState(true);
  return (
    <SwitchField
      name="notifications-demo"
      label="Receber notificações"
      checked={checked}
      onChange={setChecked}
    />
  );
}
