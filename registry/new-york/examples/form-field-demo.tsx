import { FormErrorProvider, FormField } from "~/client/components/ui/form-field";
import { Input } from "~/client/components/ui/input";

export default function FormFieldDemo() {
  return (
    <FormErrorProvider fieldErrors={{ email: ["E-mail inválido."] }}>
      <FormField name="email" label="E-mail" required>
        <Input name="email" placeholder="voce@empresa.com" />
      </FormField>
    </FormErrorProvider>
  );
}
