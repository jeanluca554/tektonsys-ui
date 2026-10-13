import { Badge } from "~/client/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="violet">Violet</Badge>
      <Badge variant="emerald">Emerald</Badge>
      <Badge variant="navy">Navy</Badge>
      <Badge variant="amber">Amber</Badge>
      <Badge variant="rose">Rose</Badge>
    </div>
  );
}
