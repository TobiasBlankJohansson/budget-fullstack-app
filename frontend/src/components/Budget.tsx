import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "./item";
import { BudgetSetRule } from "./BudgetSetRule";

type budgetCard = {
  items: budgetItem[];
  income: number;
};

type budgetRule = {
  needs: number;
  wants: number;
  saves: number;
};

export function Budget({ items, income }: budgetCard) {
  const [needs, setNeeds] = useState<budgetCard>({ items: [], income: 0 });
  const [wants, setWants] = useState<budgetCard>({ items: [], income: 0 });
  const [saves, setSaves] = useState<budgetCard>({ items: [], income: 0 });
  const [budgetRule, setBudgetRule] = useState<budgetRule>({
    needs: 50,
    wants: 30,
    saves: 20,
  });

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

  const changeRules = (needs: number, wants: number, saves: number) => {
    setNeeds((perv) => ({ items: perv.items, income: needs }));
    setWants((perv) => ({ items: perv.items, income: wants }));
    setSaves((perv) => ({ items: perv.items, income: saves }));
  };

  return (
    <div>
      <BudgetCard type={"Needs"} items={needs.items} budget={needs.income} />
      <BudgetCard type={"Wants"} items={wants.items} budget={wants.income} />
      <BudgetCard type={"Saves"} items={saves.items} budget={saves.income} />
      <BudgetSetRule onSaveClick={changeRules} />
    </div>
  );
}
