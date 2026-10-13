import { toast } from "sonner";
import { Button } from "~/client/components/ui/button";

export default function SonnerDemo() {
  return (
    <Button variant="outline" onClick={() => toast.success("Alteração salva com sucesso.")}>
      Disparar toast
    </Button>
  );
}
