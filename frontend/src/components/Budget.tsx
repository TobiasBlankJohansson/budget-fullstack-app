import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "./item";

type inputBudget = {
  items: budgetItem[];
  income: number;
};

export function Budget({ items, income }: inputBudget) {
  const [needs, setNeeds] = useState<budgetItem[]>([]);
  const [wants, setWants] = useState<budgetItem[]>([]);
  const [saves, setSaves] = useState<budgetItem[]>([]);

  useEffect(() => {
    setNeeds(() => []);
    setWants(() => []);
    setSaves(() => []);

    items.forEach((item) => {
      const itemType: string = item.type;
      if (itemType == "needs") {
        setNeeds((prev) => [...prev, item]);
        return;
      }
      if (itemType == "wants") {
        setWants((prev) => [...prev, item]);
        return;
      }
      if (itemType == "saves") {
        setSaves((prev) => [...prev, item]);
        return;
      }
    });
  }, items);

  return (
    <div>
      <BudgetCard type={"needs"} items={needs} budget={100} />
      <BudgetCard type={"wants"} items={wants} budget={100} />
      <BudgetCard type={"saves"} items={saves} budget={100} />
    </div>
  );
}
