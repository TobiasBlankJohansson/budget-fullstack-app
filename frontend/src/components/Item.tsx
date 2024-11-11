type inputItem = {
  id: string;
  name: string;
  sum: number;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  handelRemove: Function;
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
    <tr className="item" key={id}>
      <th className="item__th" onClick={handelClick}>
        {name}
      </th>
      <td className="item__dh">
        {sum}
        {selected === id && (
          <button onClick={() => handelRemove(id)}>remove</button>
        )}
      </td>
    </tr>
  );
}
