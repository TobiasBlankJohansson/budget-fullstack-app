import { useEffect, useState } from "react";
import { budgetItem, Item } from "../Item";
import { AddItemForm } from "./AddItemForm";
import { removeExpense } from "../../api/expense";
import { toast } from "react-toastify";

type inputBudgetCard = {
  type: string;
  items: budgetItem[];
  budget: number;
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  budgetId: number;
};

export function BudgetCard({
  type,
  items,
  budget,
  setBudgetItem,
  selected,
  setSelected,
  budgetId,
}: inputBudgetCard) {
  const [canSpend, setCanSpend] = useState<number>(0);
  const [totalSpend, setTotalSpend] = useState<number>(0);

  useEffect(() => {
    let spent: number = 0;
    items.forEach((item) => (spent += item.sum));

    setCanSpend(() => budget - spent);
    setTotalSpend(() => spent);
  }, [items, budget]);

  const handelRemove = async (expenseId: number) => {
    toast.info("Loading...");
    try {
      await removeExpense(budgetId, expenseId);
      setBudgetItem((prev) =>
        prev.filter((item) => Number(item.id) != expenseId)
      );
      toast.success("success");
    } catch {
      toast.error("try, again");
    }
  };

  return (
    <section className="budget__main__budget-card-container__budget-card">
      <header className="budget__main__budget-card-container__budget-card__header">
        <h3 className="budget__main__budget-card-container__budget-card__header__h3">{type}</h3>
      </header>
      <article className="budget__main__budget-card-container__budget-card__article">
        <p className="budget__main__budget-card-container__budget-card__article__p--can-spend">Can spend: {canSpend}</p>
        <table className="budget__main__budget-card-container__budget-card__article__table">
          <tr className="budget__main__budget-card-container__budget-card__article__tr">
            <td className="budget__main__budget-card-container__budget-card__article__td">Item</td>
            <td className="budget__main__budget-card-container__budget-card__article__td">Amount</td>
          </tr>
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
        <AddItemForm setBudgetItem={setBudgetItem} type={type} />
        <p className="budget__main__budget-card-container__budget-card__article__p--total-spend">Total spent: {totalSpend}</p>
      </article>
    </section>
  );
}
