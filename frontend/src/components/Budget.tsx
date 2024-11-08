import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "./item";

type budgetCard = {
  items: budgetItem[];
  income: number;
};

export function Budget({ items, income }: budgetCard) {
  const [needs, setNeeds] = useState<budgetCard>({ items: [], income: 0 });
  const [wants, setWants] = useState<budgetCard>({ items: [], income: 0 });
  const [saves, setSaves] = useState<budgetCard>({ items: [], income: 0 });

  useEffect(() => {
    setNeeds((perv) => ({ items: [], income: perv.income }));
    setWants((perv) => ({ items: [], income: perv.income }));
    setSaves((perv) => ({ items: [], income: perv.income }));

    items.forEach((item) => {
      const itemType: string = item.type;
      if (itemType == "needs") {
        setNeeds((perv) => ({
          items: [...perv.items, item],
          income: perv.income,
        }));
        return;
      }
      if (itemType == "wants") {
        setWants((perv) => ({
          items: [...perv.items, item],
          income: perv.income,
        }));
        return;
      }
      if (itemType == "saves") {
        setSaves((perv) => ({
          items: [...perv.items, item],
          income: perv.income,
        }));
        return;
      }
    });
  }, items);

  const cangeRules = (needs: number, wants: number, saves: number) => {
    setNeeds((perv) => ({ items: perv.items, income: needs }));
    setWants((perv) => ({ items: perv.items, income: wants }));
    setSaves((perv) => ({ items: perv.items, income: saves }));
  };

  return (
    <div>
      <BudgetCard type={"Needs"} items={needs.items} budget={100} />
      <BudgetCard type={"Wants"} items={wants.items} budget={100} />
      <BudgetCard type={"Saves"} items={saves.items} budget={100} />
    </div>
  );
}
