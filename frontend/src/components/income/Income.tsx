import { useEffect } from "react";
import { budgetItem } from "../Item";
import { DisplayIncomeList } from "./DisplayIncomeList";

type inputIncome = {
  items: budgetItem[];
  income: number;
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
};

export function Income({ items, income, setItems, setIncome }: inputIncome) {
  useEffect(() => {
    let count = 0;
    items.forEach((item) => {
      count += item.sum;
    });
    setIncome(count);
  }, [items]);

  return (
    <section>
      <DisplayIncomeList items={items} setItems={setItems} totalIncome={100} />
    </section>
  );
}
