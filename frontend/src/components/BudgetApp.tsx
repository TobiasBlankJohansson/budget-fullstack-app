import { useEffect, useState } from "react";
import { Budget } from "./expenses";
import { budgetItem } from "./Item";
import { DisplayIncome } from "./income/DisplayIncome";
import { Income } from "./income/Income";
import { getIncome } from "../api/income";

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

  useEffect(() => {
    const getList = async () => {
      const incomeList = await getIncome(2000);
      setIncomeItem(() => incomeList);
    };
    getList();
  }, []);

  return (
    <>
      <main>
        <h1>myBudget</h1>
        <DisplayIncome income={income} />
        <Budget
          income={income}
          items={budgetItem}
          setBudgetItem={setBudgetItem}
        />
        <Income
          items={incomeItem}
          income={income}
          setItems={setIncomeItem}
          setIncome={setIncome}
        />
      </main>
    </>
  );
}
