import { Link } from "react-router";
import registryData from "../../registry.json";

type RegistryItem = {
  name: string;
  type: string;
  title?: string;
  description?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  "registry:ui": "Componentes",
  "registry:hook": "Hooks",
  "registry:lib": "Utilitários",
  "registry:file": "Utilitários",
};

export function clientLoader() {
  const items = (registryData.items as RegistryItem[]).filter(
    (item) => !item.name.startsWith("example-"),
  );
  const groups = new Map<string, RegistryItem[]>();
  for (const item of items) {
    const label = CATEGORY_LABELS[item.type] ?? "Outros";
    groups.set(label, [...(groups.get(label) ?? []), item]);
  }
  return { groups: Array.from(groups.entries()) };
}

export default function Index({
  loaderData,
}: {
  loaderData: { groups: [string, RegistryItem[]][] };
}) {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-2xl font-bold">tektonsys-ui</h1>
      {loaderData.groups.map(([label, items]) => (
        <section key={label} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {label}
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.type === "registry:ui" ? `/components/${item.name}` : `/other/${item.name}`}
                  className="block rounded-md border border-border px-3 py-2 text-sm hover:bg-accent"
                >
                  {item.title ?? item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
