import { budgetItem } from "../components/Item";

const path = import.meta.env.VITE_BUDGET_PATH;

export async function getExpense(budgetId: number): Promise<budgetItem[]> {
  var response = await fetch(`${path}api/budget/${budgetId}/expense`);
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

export async function addExpense(
  budgetId: number,
  name: string,
  sum: number,
  type: string
): Promise<budgetItem> {
  var response = await fetch(`${path}api/budget/${budgetId}/expense`, {
    method: "POST",
    headers: {
      "content-type": "application/JSON",
    },
    body: JSON.stringify({ budgetId, name, sum, type }),
  });
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}