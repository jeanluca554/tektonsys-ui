import { Button } from "~/client/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/client/components/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">Conteúdo flutuante exibido ao lado do gatilho.</p>
      </PopoverContent>
    </Popover>
  );
}
