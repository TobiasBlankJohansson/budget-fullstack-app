import { Budget } from "./Budget";
import { budgetItem } from "./item";

const Items: budgetItem[] = [
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "needs",
  },
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "wants",
  },
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "saves",
  },
];

export function BudgetApp() {
  return (
    <>
      <main>
        <Budget income={100} items={Items} />
      </main>
    </>
  );
}
