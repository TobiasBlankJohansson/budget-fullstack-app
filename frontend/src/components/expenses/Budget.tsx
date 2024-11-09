import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "../Item";
import { BudgetSetRule } from "./BudgetSetRule";

type inputBudget = {
  items: budgetItem[];
  income: number;
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
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

export function Budget({ items, income, setBudgetItem }: inputBudget) {
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

  useEffect(() => {
    let needsArr: budgetItem[] = [];
    let wantsArr: budgetItem[] = [];
    let savesArr: budgetItem[] = [];

    items.forEach((item) => {
      const itemType: string = item.type;
      if (itemType == "needs") {
        needsArr.push(item);
        return;
      }
      if (itemType == "wants") {
        wantsArr.push(item);
        return;
      }
      if (itemType == "saves") {
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
      />
      <BudgetCard
        type={"Wants"}
        items={cardItems.wants}
        budget={budgetRule.wants * income}
        setBudgetItem={setBudgetItem}
      />
      <BudgetCard
        type={"Saves"}
        items={cardItems.saves}
        budget={budgetRule.saves * income}
        setBudgetItem={setBudgetItem}
      />
      <BudgetSetRule setCardItems={setBudgetRule} />
    </div>
  );
}
