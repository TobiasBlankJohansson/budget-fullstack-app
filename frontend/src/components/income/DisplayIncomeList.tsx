import { toast } from "react-toastify";
import { removeIncome } from "../../api/income";
import { budgetItem, Item } from "../Item";

type inputDisplayIncomeList = {
  totalIncome: number;
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  budgetId: number;
};

export function DisplayIncomeList({
  items,
  setItems,
  totalIncome,
  selected,
  setSelected,
  budgetId,
}: inputDisplayIncomeList) {
  const handelRemove = async (expenseId: number) => {
    toast.info("Loading...");
    try {
      await removeIncome(budgetId, expenseId);
      setItems((prev) => prev.filter((item) => Number(item.id) != expenseId));
      toast.success("success");
    } catch {
      toast.error("try, again");
    }
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
