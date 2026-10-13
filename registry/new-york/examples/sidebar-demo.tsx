import { Home, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "~/client/components/ui/sidebar";

const items = [
  { title: "Início", icon: Home },
  { title: "Doadores", icon: Users },
  { title: "Configurações", icon: Settings },
];

export default function SidebarDemo() {
  return (
    <div className="h-96 overflow-hidden rounded-lg border border-border">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar collapsible="none">
          <SidebarHeader>
            <span className="px-2 text-sm font-semibold">tektonsys-ui</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navegação</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="flex items-center gap-2 p-4">
            <span className="text-sm text-muted-foreground">Conteúdo principal</span>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
