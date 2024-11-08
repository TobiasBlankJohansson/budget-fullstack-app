export type bugetItem = {
  id: string;
  name: string;
  sum: string;
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
