import { ImageUploadCompact } from "~/client/components/ui/image-upload-compact";

export default function ImageUploadCompactDemo() {
  return (
    <div className="flex flex-col gap-2">
      <ImageUploadCompact
        name="avatar-upload-demo"
        description="JPG, PNG ou WebP."
        defaultValue="https://github.com/shadcn.png"
      />
      <p className="text-xs text-muted-foreground">
        Escolher um novo arquivo exige um endpoint <code>/api/file-upload</code> no projeto
        consumidor — o preview acima mostra apenas o estado "já enviado".
      </p>
    </div>
  );
}
