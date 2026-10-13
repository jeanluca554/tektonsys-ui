import { data, Link } from "react-router";
import registryData from "../../registry.json";
import type { Route } from "./+types/route.other.$name";

type RegistryItem = { name: string; type: string; title?: string; description?: string };

const HOOK_INFO: Record<string, { importPath: string; exportName: string }> = {
  "use-mobile": { importPath: "~/client/hooks/use-mobile", exportName: "useIsMobile" },
  "use-theme": { importPath: "~/client/hooks/useTheme", exportName: "useTheme" },
  "use-filter": { importPath: "~/client/hooks/useFilter", exportName: "useFilter" },
  "use-query-toast": { importPath: "~/client/hooks/useQueryToast", exportName: "useQueryToast" },
};

const LIB_INFO: Record<string, { importPath: string; exportName: string }> = {
  utils: { importPath: "~/lib/utils", exportName: "cn" },
  "scoped-params": { importPath: "~/lib/scopedParams", exportName: "useScopedParams" },
};

function usageSnippet(item: RegistryItem): string | null {
  if (item.type === "registry:hook") {
    const info = HOOK_INFO[item.name];
    return info ? `import { ${info.exportName} } from "${info.importPath}";` : null;
  }
  if (item.type === "registry:lib") {
    const info = LIB_INFO[item.name];
    return info ? `import { ${info.exportName} } from "${info.importPath}";` : null;
  }
  return null;
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const item = (registryData.items as RegistryItem[]).find(
    (i) => i.name === params.name && i.type !== "registry:ui" && !i.name.startsWith("example-"),
  );
  if (!item) throw data("Item não encontrado", { status: 404 });
  return { item };
}

export default function OtherItemPage({ loaderData }: Route.ComponentProps) {
  const { item } = loaderData;
  const snippet = usageSnippet(item);

  return (
    <div className="mx-auto max-w-3xl p-8">
      <Link to="/" className="text-sm text-muted-foreground">
        ← Voltar
      </Link>
      <h1 className="mt-2 text-2xl font-bold">{item.title ?? item.name}</h1>
      {item.description && <p className="mt-1 text-muted-foreground">{item.description}</p>}

      <section className="mt-6">
        <h2 className="mb-2 text-sm font-semibold">Instalação</h2>
        <pre className="overflow-x-auto rounded-md bg-muted p-3 text-sm">
          <code>{`npx shadcn add @ds/${item.name}`}</code>
        </pre>
      </section>

      {snippet && (
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-semibold">Uso</h2>
          <pre className="overflow-x-auto rounded-md bg-muted p-3 text-sm">
            <code>{snippet}</code>
          </pre>
        </section>
      )}
    </div>
  );
}
