import { Bold, Italic, Underline } from "lucide-react";
import { useState } from "react";
import { ToggleGroup } from "~/client/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  const [value, setValue] = useState("bold");
  return (
    <ToggleGroup.Root type="single" value={value} onValueChange={setValue}>
      <ToggleGroup.Item value="bold" variant="icon">
        <Bold size={16} />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" variant="icon">
        <Italic size={16} />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="underline" variant="icon">
        <Underline size={16} />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
