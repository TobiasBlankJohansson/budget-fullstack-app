import { useEffect, useState } from "react";
import { Budget } from "./expenses";
import { budgetItem } from "./Item";
import { DisplayIncome } from "./income/DisplayIncome";
import { Income } from "./income/Income";
import { getIncome } from "../api/income";

export function BudgetApp() {
  const [budgetItem, setBudgetItem] = useState<budgetItem[]>([]);
  const [incomeItem, setIncomeItem] = useState<budgetItem[]>([]);
  const [income, setIncome] = useState<number>(100);

  useEffect(() => {
    const getList = async () => {
      const incomeList = await getIncome(2000);
      setIncomeItem(() => incomeList);
      const expenseList = await getIncome(2000);
      setBudgetItem(() => expenseList);
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
