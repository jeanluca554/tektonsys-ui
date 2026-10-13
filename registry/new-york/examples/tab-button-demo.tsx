import { Bell, Inbox } from "lucide-react";
import { useState } from "react";
import { TabBar } from "~/client/components/ui/tab-button";

export default function TabButtonDemo() {
  const [active, setActive] = useState("inbox");
  return (
    <TabBar.List>
      <TabBar.Button
        active={active === "inbox"}
        onClick={() => setActive("inbox")}
        icon={Inbox}
        label="Caixa de entrada"
        count={4}
      />
      <TabBar.Button
        active={active === "alerts"}
        onClick={() => setActive("alerts")}
        icon={Bell}
        label="Alertas"
      />
    </TabBar.List>
  );
}
