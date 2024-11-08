import { Budget } from "./Budget";
import { budgetItem } from "./item";

const Items: budgetItem[] = [
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "string",
  },
  {
    id: "1",
    name: "Stuff",
    sum: 50,
    type: "string",
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
