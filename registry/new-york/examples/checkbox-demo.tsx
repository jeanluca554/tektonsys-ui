import { Checkbox } from "~/client/components/ui/checkbox";
import { Label } from "~/client/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms-demo" defaultChecked />
      <Label htmlFor="terms-demo">Aceito os termos de uso</Label>
    </div>
  );
}
