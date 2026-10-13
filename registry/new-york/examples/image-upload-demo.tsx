import { ImageUpload } from "~/client/components/ui/image-upload";

export default function ImageUploadDemo() {
  return (
    <div className="flex flex-col gap-2">
      <ImageUpload name="cover-demo" defaultValue="https://github.com/shadcn.png" />
      <p className="text-xs text-muted-foreground">
        Escolher um novo arquivo exige um endpoint <code>/api/file-upload</code> no projeto
        consumidor — o preview acima mostra apenas o estado "já enviado".
      </p>
    </div>
  );
}
