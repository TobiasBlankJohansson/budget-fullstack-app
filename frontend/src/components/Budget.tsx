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

  const cangeRules = (needs: number, whants: number, saves: number) => {
    
  }

  return (
    <div>
      <BudgetCard type={"Needs"} items={needs} budget={100} />
      <BudgetCard type={"Wants"} items={wants} budget={100} />
      <BudgetCard type={"Saves"} items={saves} budget={100} />
    </div>
  );
}
