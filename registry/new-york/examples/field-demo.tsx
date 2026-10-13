import { Field } from "~/client/components/ui/field";
import { Input } from "~/client/components/ui/input";

export default function FieldDemo() {
  return (
    <Field.Set>
      <Field.Root>
        <Field.Content>
          <Field.Label htmlFor="name-demo">Nome completo</Field.Label>
          <Input id="name-demo" placeholder="Maria Silva" />
          <Field.Description>Como aparece no documento oficial.</Field.Description>
        </Field.Content>
      </Field.Root>
    </Field.Set>
  );
}
