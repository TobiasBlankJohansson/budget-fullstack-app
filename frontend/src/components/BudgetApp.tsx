import { useState } from "react";
import { Budget } from "./expenses";
import { budgetItem } from "./Item";

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
  console.log(budgetItem);
  return (
    <>
      <main>
        <Budget income={100} items={budgetItem} setBudgetItem={setBudgetItem} />
      </main>
    </>
  );
}
