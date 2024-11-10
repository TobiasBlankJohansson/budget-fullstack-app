type inputItem = {
  id: string;
  name: string;
  sum: number;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type budgetItem = {
  id: string;
  name: string;
  sum: number;
  type: string;
};

export function Item({ id, name, sum, selected, setSelected }: inputItem) {
  const handelClick = () => {
    setSelected(id);
  };

  return (
    <tr key={id}>
      <th onClick={handelClick}>{name}</th>
      <td>
        {sum}
        {selected === id && <button>remove</button>}
      </td>
    </tr>
  );
}
