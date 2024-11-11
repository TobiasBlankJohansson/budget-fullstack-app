type inputItem = {
  id: string;
  name: string;
  sum: number;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  handelRemove: Function;
};

export type budgetItem = {
  id: string;
  name: string;
  sum: number;
  type: string;
};

export function Item({
  id,
  name,
  sum,
  selected,
  setSelected,
  handelRemove,
}: inputItem) {
  const handelClick = () => {
    setSelected(id);
  };
  return (
    <tr key={id}>
      <th onClick={handelClick}>{name}</th>
      <td>
        {sum}
        {selected === id && (
          <button onClick={() => handelRemove(id)}>remove</button>
        )}
      </td>
    </tr>
  );
}
