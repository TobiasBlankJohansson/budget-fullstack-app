export type budgetItem = {
  id: string;
  name: string;
  sum: number;
  type: string;
};

export function Item({ id, name, sum }: budgetItem) {
  const handelClick = () =>{
  }

  return (
    <tr key={id} onClick={handelClick}>
      <th>{name}</th>
      <td>{sum}</td>
    </tr>
  );
}
