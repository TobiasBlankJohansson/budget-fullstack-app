import { useEffect, useState } from "react";
import { Budget } from "./expenses";
import { DisplayIncome } from "./income/DisplayIncome";
import { Income } from "./income/Income";
import { getIncome } from "../api/income";
import { getExpense } from "../api/expense";
import { addBudget } from "../api/budget";
import { budgetItem } from "../types/budget";

export function BudgetApp() {
  const [budgetId, setBudgetId] = useState<number>(2024);
  const [budgetItem, setBudgetItem] = useState<budgetItem[]>([]);
  const [incomeItem, setIncomeItem] = useState<budgetItem[]>([]);
  const [income, setIncome] = useState<number>(100);

  useEffect(() => {
    const getId = async () => {
      const id = await addBudget(2000);
      setBudgetId(() => id);
    };
    getId();
  }, []);

  useEffect(() => {
    const getList = async () => {
      const incomeList = await getIncome(budgetId);
      setIncomeItem(() => incomeList);
      const expenseList = await getExpense(budgetId);
      setBudgetItem(() => expenseList);
    };
    getList();
  }, [budgetId]);

  return (
    <>
      <header className="budget__header">
        <h1 className="budget__header__h1">myBudget</h1>
      </header>
      <main className="budget__main">
        <DisplayIncome income={income} />
        <Budget
          income={income}
          items={budgetItem}
          setBudgetItem={setBudgetItem}
          budgetId={budgetId}
        />
        <Income
          items={incomeItem}
          income={income}
          setItems={setIncomeItem}
          setIncome={setIncome}
          budgetId={budgetId}
        />
      </main>
    </>
  );
}
