import { useEffect, useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "./item";
import { BudgetSetRule } from "./BudgetSetRule";

type inputBudget = {
  items: budgetItem[];
  income: number;
};

export type cardItems = {
  needs: budgetItem[];
  wants: budgetItem[];
  saves: budgetItem[];
};

type budgetRule = {
  needs: number;
  wants: number;
  saves: number;
};

export function Budget({ items, income }: inputBudget) {
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
      />
      <BudgetCard
        type={"Wants"}
        items={cardItems.wants}
        budget={budgetRule.wants * income}
      />
      <BudgetCard
        type={"Saves"}
        items={cardItems.saves}
        budget={budgetRule.saves * income}
      />
    </div>
  );
}
