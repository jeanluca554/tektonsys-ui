import { Separator } from "~/client/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="w-64">
      <p className="text-sm">Acima da linha</p>
      <Separator className="my-4" />
      <p className="text-sm">Abaixo da linha</p>
    </div>
  );
}
