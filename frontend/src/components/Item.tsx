export type budgetItem = {
  id: string;
  name: string;
  sum: number;
  type: string;
};

export function Item({ id, name, sum }: budgetItem) {
  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{sum}</td>
    </tr>
  );
}
