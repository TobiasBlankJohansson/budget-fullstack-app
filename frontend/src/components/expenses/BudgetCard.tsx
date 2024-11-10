import { useEffect, useState } from "react";
import { budgetItem, Item } from "../Item";
import { AddItemForm } from "./AddItemForm";

type inputBudgetCard = {
  type: string;
  items: budgetItem[];
  budget: number;
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function BudgetCard({
  type,
  items,
  budget,
  setBudgetItem,
  selected,
  setSelected,
}: inputBudgetCard) {
  const [canSpend, setCanSpend] = useState<number>(0);
  const [totalSpend, setTotalSpend] = useState<number>(0);

  useEffect(() => {
    let spent: number = 0;
    items.forEach((item) => (spent += item.sum));

    setCanSpend(() => budget - spent);
    setTotalSpend(() => spent);
  }, [items, budget]);

  return (
    <section>
      <header>
        <h3>{type}</h3>
      </header>
      <article>
        <p>Can spend: {canSpend}</p>
        <table>
          <tr>
            <td>Item</td>
            <td>Amount</td>
          </tr>
          {items.map((item) =>
            Item({
              id: item.id,
              name: item.name,
              sum: item.sum,
              selected: selected,
              setSelected: setSelected,
            })
          )}
        </table>
        <AddItemForm setBudgetItem={setBudgetItem} type={type} />
        <p>Total spent: {totalSpend}</p>
      </article>
    </section>
  );
}
