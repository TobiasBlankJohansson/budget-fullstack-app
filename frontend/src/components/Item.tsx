export type bugetItem = {
  id: string;
  name: string;
  sum: number;
  type: string;
};

export function Item({ id, name, sum }: bugetItem) {
  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{sum}</td>
    </tr>
  );
}
