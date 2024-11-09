import { useState } from "react";
import { Budget } from "./expenses";
import { budgetItem } from "./Item";
import { DisplayIncome } from "./DisplayIncome";
import { Income } from "./income/Income";

const Items: budgetItem[] = [
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "Needs",
  },
  {
    id: "2",
    name: "Stuff",
    sum: 50,
    type: "Wants",
  },
  {
    id: "3",
    name: "Stuff",
    sum: 50,
    type: "Saves",
  },
];

export function BudgetApp() {
  const [budgetItem, setBudgetItem] = useState<budgetItem[]>(Items);
  const [incomeItem, setIncomeItem] = useState<budgetItem[]>(Items);
  const [income, setIncome] = useState<number>(100);

  return (
    <>
      <main>
        <DisplayIncome income={income} />
        <Budget
          income={income}
          items={budgetItem}
          setBudgetItem={setBudgetItem}
        />
      </main>
    </>
  );
}
