import { ScrollArea } from "~/client/components/ui/scroll-area";

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-64 rounded-md border border-border p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i} className="text-sm">
          Item {i + 1}
        </p>
      ))}
    </ScrollArea>
  );
}
