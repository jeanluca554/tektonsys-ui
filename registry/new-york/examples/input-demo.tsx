import { Search } from "lucide-react";
import { Input } from "~/client/components/ui/input";

export default function InputDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <Input placeholder="Nome completo" />
      <Input leftIcon={Search} placeholder="Buscar..." />
    </div>
  );
}
