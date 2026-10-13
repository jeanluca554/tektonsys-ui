import { Table } from "~/client/components/ui/table";

const donors = [
  { name: "Maria Silva", email: "maria@email.com", amount: "R$ 150,00" },
  { name: "João Souza", email: "joao@email.com", amount: "R$ 80,00" },
];

export default function TableDemo() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>E-mail</Table.Head>
          <Table.Head>Valor</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {donors.map((donor) => (
          <Table.Row key={donor.email}>
            <Table.Cell>{donor.name}</Table.Cell>
            <Table.Cell>{donor.email}</Table.Cell>
            <Table.Cell>{donor.amount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
