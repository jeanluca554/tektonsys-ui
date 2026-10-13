import { CurrencyInput } from "~/client/components/ui/currency-input";

export default function CurrencyInputDemo() {
  return <CurrencyInput name="amount-demo" defaultValue={150.5} className="max-w-xs" />;
}
