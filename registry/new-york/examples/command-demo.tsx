import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/client/components/ui/command";

export default function CommandDemo() {
  return (
    <Command className="max-w-sm rounded-lg border border-border">
      <CommandInput placeholder="Buscar comando..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado.</CommandEmpty>
        <CommandGroup heading="Ações">
          <CommandItem>Nova campanha</CommandItem>
          <CommandItem>Novo doador</CommandItem>
          <CommandItem>Exportar relatório</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
