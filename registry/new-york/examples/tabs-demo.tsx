import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/client/components/ui/tabs";

export default function TabsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="password">Senha</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Altere as informações da sua conta aqui.
        </TabsContent>
        <TabsContent value="password">Altere sua senha aqui.</TabsContent>
      </Tabs>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList variant="line">
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="password">Senha</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Altere as informações da sua conta aqui.
        </TabsContent>
        <TabsContent value="password">Altere sua senha aqui.</TabsContent>
      </Tabs>
    </div>
  );
}
