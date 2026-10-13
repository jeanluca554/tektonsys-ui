import { Label } from "~/client/components/ui/label";
import { RadioGroup } from "~/client/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup.Root defaultValue="monthly">
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="monthly" id="monthly-demo" />
        <Label htmlFor="monthly-demo">Mensal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="yearly" id="yearly-demo" />
        <Label htmlFor="yearly-demo">Anual</Label>
      </div>
    </RadioGroup.Root>
  );
}
