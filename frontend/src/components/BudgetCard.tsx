import { useEffect, useState } from "react";
import { budgetItem, Item } from "./item";

type inputBudgetCard = {
  type: string;
  items: budgetItem[];
  budget: number;
};

export function BudgetCard({ type, items, budget }: inputBudgetCard) {
  const [canSpend, setCanSpend] = useState<number>(0);
  const [totalSpend, setTotalSpend] = useState<number>(0);

  useEffect(() => {
    let spent: number = 0;
    items.forEach((item) => (spent += item.sum));

    setCanSpend(() => budget - spent);
    setTotalSpend(() => spent);
  }, [items]);

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
            <td></td>
          </tr>
          {items.map((item) => Item(item))}
        </table>
        <p>Total spent: {totalSpend}</p>
      </article>
    </section>
  );
}
