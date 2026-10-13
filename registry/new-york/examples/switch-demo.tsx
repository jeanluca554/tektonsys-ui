import { Label } from "~/client/components/ui/label";
import { Switch } from "~/client/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="notifications-demo" defaultChecked />
      <Label htmlFor="notifications-demo">Notificações ativas</Label>
    </div>
  );
}
