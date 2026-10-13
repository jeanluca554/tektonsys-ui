import { Inbox } from "lucide-react";
import { Empty } from "~/client/components/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="icon">
          <Inbox />
        </Empty.Media>
        <Empty.Title>Nenhum registro encontrado</Empty.Title>
        <Empty.Description>Ajuste os filtros ou crie um novo item.</Empty.Description>
      </Empty.Header>
    </Empty.Root>
  );
}
