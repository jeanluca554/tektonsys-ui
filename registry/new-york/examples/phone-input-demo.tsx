import { useState } from "react";
import { PhoneInput } from "~/client/components/ui/phone-input";

export default function PhoneInputDemo() {
  const [value, setValue] = useState<string>();
  return (
    <PhoneInput
      defaultCountry="BR"
      value={value}
      onChange={(v) => setValue(v)}
      className="max-w-xs"
    />
  );
}
