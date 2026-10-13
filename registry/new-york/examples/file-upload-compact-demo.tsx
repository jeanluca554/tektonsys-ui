import { FileUploadCompact } from "~/client/components/ui/file-upload-compact";

export default function FileUploadCompactDemo() {
  return (
    <div className="flex flex-col gap-2">
      <FileUploadCompact
        name="document-demo"
        description="PDF, DOC ou XLS até 10MB."
        defaultValue="https://example.com/contrato-assinado.pdf"
      />
      <p className="text-xs text-muted-foreground">
        Escolher um novo arquivo exige um endpoint <code>/api/file-upload</code> no projeto
        consumidor — o preview acima mostra apenas o estado "já enviado".
      </p>
    </div>
  );
}
