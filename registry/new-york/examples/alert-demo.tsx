import { Alert } from "~/client/components/ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Alert.Root variant="default">
        <Alert.Title>Atualização disponível</Alert.Title>
        <Alert.Description>Uma nova versão do app já pode ser instalada.</Alert.Description>
      </Alert.Root>
      <Alert.Root variant="warning">
        <Alert.Title>Atenção</Alert.Title>
        <Alert.Description>Revise os dados antes de continuar.</Alert.Description>
      </Alert.Root>
      <Alert.Root variant="destructive">
        <Alert.Title>Erro ao salvar</Alert.Title>
        <Alert.Description>Não foi possível concluir a operação.</Alert.Description>
      </Alert.Root>
    </div>
  );
}
