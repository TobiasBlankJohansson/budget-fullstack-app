import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "../Item";
import { BudgetSetRule } from "./BudgetSetRule";

type inputBudget = {
  items: budgetItem[];
  income: number;
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  budgetId: number;
};

type cardItems = {
  needs: budgetItem[];
  wants: budgetItem[];
  saves: budgetItem[];
};

export type budgetRule = {
  needs: number;
  wants: number;
  saves: number;
};

export function Budget({
  items,
  income,
  setBudgetItem,
  budgetId,
}: inputBudget) {
  const [cardItems, setcardItems] = useState<cardItems>({
    needs: [],
    wants: [],
    saves: [],
  });
  const [budgetRule, setBudgetRule] = useState<budgetRule>({
    needs: 0.5,
    wants: 0.3,
    saves: 0.2,
  });
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    let needsArr: budgetItem[] = [];
    let wantsArr: budgetItem[] = [];
    let savesArr: budgetItem[] = [];

    items.forEach((item) => {
      const itemType: string = item.type;
      if (itemType == "Needs") {
        needsArr.push(item);
        return;
      }
      if (itemType == "Wants") {
        wantsArr.push(item);
        return;
      }
      if (itemType == "Saves") {
        savesArr.push(item);
        return;
      }
    });

    setcardItems(() => ({ needs: needsArr, wants: wantsArr, saves: savesArr }));
  }, [items]);

  return (
    <div>
      <BudgetCard
        type={"Needs"}
        items={cardItems.needs}
        budget={budgetRule.needs * income}
        setBudgetItem={setBudgetItem}
        selected={selected}
        setSelected={setSelected}
        budgetId={budgetId}
      />
      <BudgetCard
        type={"Wants"}
        items={cardItems.wants}
        budget={budgetRule.wants * income}
        setBudgetItem={setBudgetItem}
        selected={selected}
        setSelected={setSelected}
        budgetId={budgetId}
      />
      <BudgetCard
        type={"Saves"}
        items={cardItems.saves}
        budget={budgetRule.saves * income}
        setBudgetItem={setBudgetItem}
        selected={selected}
        setSelected={setSelected}
        budgetId={budgetId}
      />
      <BudgetSetRule setCardItems={setBudgetRule} />
    </div>
  );
}
