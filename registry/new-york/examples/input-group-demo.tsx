import { Mail } from "lucide-react";
import { InputGroup } from "~/client/components/ui/input-group";

export default function InputGroupDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <InputGroup.Root>
        <InputGroup.Side side="start">https://</InputGroup.Side>
        <InputGroup.Input placeholder="seusite.com.br" />
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Addon align="inline-start">
          <Mail size={16} />
        </InputGroup.Addon>
        <InputGroup.Input className="pl-9" placeholder="voce@empresa.com" />
      </InputGroup.Root>
    </div>
  );
}
