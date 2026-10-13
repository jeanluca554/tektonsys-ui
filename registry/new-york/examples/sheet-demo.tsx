import { Button } from "~/client/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/client/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Abrir painel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detalhes</SheetTitle>
          <SheetDescription>Painel lateral deslizante.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
