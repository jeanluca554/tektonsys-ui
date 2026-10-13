import { Select } from "~/client/components/ui/select";

export default function SelectDemo() {
  return (
    <Select.Root defaultValue="monthly">
      <Select.Trigger className="max-w-xs">
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="monthly">Mensal</Select.Item>
        <Select.Item value="quarterly">Trimestral</Select.Item>
        <Select.Item value="yearly">Anual</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
