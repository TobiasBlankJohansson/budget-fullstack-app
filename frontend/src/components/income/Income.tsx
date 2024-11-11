import { useEffect, useState } from "react";
import { budgetItem } from "../Item";
import { DisplayIncomeList } from "./DisplayIncomeList";
import { AddIncomeForm } from "./AddIncomeForm";

type inputIncome = {
  items: budgetItem[];
  income: number;
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
  budgetId: number;
};

export function Income({
  items,
  income,
  setItems,
  setIncome,
  budgetId,
}: inputIncome) {
  const [selected, setSelected] = useState<string>();
  useEffect(() => {
    let count = 0;
    items.forEach((item) => {
      count += item.sum;
    });
    setIncome(count);
  }, [items]);

  return (
    <section>
      <AddIncomeForm setItems={setItems} budgetId={budgetId} />
      <DisplayIncomeList
        items={items}
        setItems={setItems}
        totalIncome={income}
        selected={selected}
        setSelected={setSelected}
        budgetId={budgetId}
      />
    </section>
  );
}
