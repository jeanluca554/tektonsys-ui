import { lazy, Suspense, useMemo, type ComponentType } from "react";
import { data, Link } from "react-router";
import registryData from "../../registry.json";
import type { Route } from "./+types/route.components.$name";

type RegistryItem = { name: string; type: string; title?: string; description?: string };

const demoModules = import.meta.glob<{ default: ComponentType }>(
  "/registry/new-york/examples/*-demo.tsx",
);
const demoSources = import.meta.glob("/registry/new-york/examples/*-demo.tsx", {
  query: "?raw",
  import: "default",
});

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const item = (registryData.items as RegistryItem[]).find(
    (i) => i.name === params.name && i.type === "registry:ui",
  );
  if (!item) throw data("Componente não encontrado", { status: 404 });

  const demoKey = `/registry/new-york/examples/${params.name}-demo.tsx`;
  const hasDemo = demoKey in demoModules;
  const source = hasDemo ? ((await (demoSources[demoKey] as () => Promise<string>)()) as string) : null;

  return { item, demoKey: hasDemo ? demoKey : null, source };
}

function DemoRenderer({ demoKey }: { demoKey: string }) {
  const Demo = useMemo(() => lazy(demoModules[demoKey]), [demoKey]);
  return (
    <Suspense fallback={<p className="text-sm text-muted-foreground">Carregando...</p>}>
      <Demo />
    </Suspense>
  );
}

export default function ComponentPage({ loaderData }: Route.ComponentProps) {
  const { item, demoKey, source } = loaderData;
  return (
    <div className="mx-auto max-w-3xl p-8">
      <Link to="/" className="text-sm text-muted-foreground">
        ← Voltar
      </Link>
      <h1 className="mt-2 text-2xl font-bold">{item.title ?? item.name}</h1>
      {item.description && <p className="mt-1 text-muted-foreground">{item.description}</p>}

      <section className="mt-6 rounded-lg border border-border p-8">
        {demoKey ? (
          <DemoRenderer demoKey={demoKey} />
        ) : (
          <p className="text-sm text-muted-foreground">Sem preview disponível.</p>
        )}
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-sm font-semibold">Instalação</h2>
        <pre className="overflow-x-auto rounded-md bg-muted p-3 text-sm">
          <code>{`npx shadcn add @ds/${item.name}`}</code>
        </pre>
      </section>

      {source && (
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold">Código</h2>
          <pre className="overflow-x-auto rounded-md bg-muted p-3 text-sm">
            <code>{source}</code>
          </pre>
        </section>
      )}
    </div>
  );
}
