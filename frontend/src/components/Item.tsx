type bugetItem = {
  id: string;
  name: string;
  sum: string;
  type: string;
};

export function item({ id, name, sum }: bugetItem) {
  return (
    <tr key={id}>
      <th>{name}</th>
      <th>{sum}</th>
    </tr>
  );
}
