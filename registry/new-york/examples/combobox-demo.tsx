import { useState } from "react";
import { Combobox } from "~/client/components/ui/combobox";

const options = [
  { value: "sp", label: "São Paulo" },
  { value: "rj", label: "Rio de Janeiro" },
  { value: "mg", label: "Minas Gerais" },
];

export default function ComboboxDemo() {
  const [value, setValue] = useState("");
  return (
    <Combobox
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Selecione um estado"
      className="max-w-xs"
    />
  );
}
