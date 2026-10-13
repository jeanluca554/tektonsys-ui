import { TrendingUp } from "lucide-react";
import { Card } from "~/client/components/ui/card";

export default function CardDemo() {
  return (
    <Card.Root className="max-w-sm">
      <Card.MetricHeader label="Receita mensal" icon={TrendingUp} color="success" />
      <Card.MetricValue>R$ 24.500,00</Card.MetricValue>
      <Card.MetricTrend value="+12% vs mês anterior" direction="up" />
    </Card.Root>
  );
}
