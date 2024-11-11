import { removeIncome } from "../../api/income";
import { budgetItem, Item } from "../Item";

type inputDisplayIncomeList = {
  totalIncome: number;
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function DisplayIncomeList({
  items,
  setItems,
  totalIncome,
  selected,
  setSelected,
}: inputDisplayIncomeList) {
  const handelRemove = async (expenseId: number) => {
    await removeIncome(2000, expenseId);
    setItems((prev) => prev.filter((item) => Number(item.id) != expenseId));
  };

  return (
    <section>
      <h2>Income</h2>
      <table>
        {items.map((item) =>
          Item({
            id: item.id,
            name: item.name,
            sum: item.sum,
            selected: selected,
            setSelected: setSelected,
            handelRemove: handelRemove,
          })
        )}
      </table>
      <p>Total income: {totalIncome}</p>
    </section>
  );
}
