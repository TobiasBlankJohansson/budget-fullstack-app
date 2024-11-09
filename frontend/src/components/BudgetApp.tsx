import { useState } from "react";
import { Budget } from "./expenses";
import { budgetItem } from "./item";

const Items: budgetItem[] = [
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "needs",
  },
  {
    id: "2",
    name: "Stuff",
    sum: 50,
    type: "wants",
  },
  {
    id: "3",
    name: "Stuff",
    sum: 50,
    type: "saves",
  },
];

export function BudgetApp() {
  const [budgetItem, setBudgetItem] = useState<budgetItem[]>(Items);

  return (
    <>
      <main>
        <Budget income={100} items={budgetItem} setBudgetItem={setBudgetItem} />
      </main>
    </>
  );
}
