import { useEffect } from "react";
import { budgetItem } from "../Item";
import { DisplayIncomeList } from "./DisplayIncomeList";
import { AddItemForm } from "../expenses/AddItemForm";
import { AddIncome } from "./AddIncome";

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
      <AddIncome setItems={setItems} />
      <DisplayIncomeList
        items={items}
        setItems={setItems}
        totalIncome={income}
      />
    </section>
  );
}
