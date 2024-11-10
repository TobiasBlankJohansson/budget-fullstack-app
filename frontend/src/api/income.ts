import { budgetItem } from "../components/Item";

const path = import.meta.env.VITE_BUDGET_PATH;

export async function getIncome(budgetId: number): Promise<budgetItem[]> {
  var response = await fetch(`${path}api/budget/${budgetId}/income`);
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}

export async function addIncome(
  budgetId: number,
  name: string,
  sum: number,
  type: string
): Promise<budgetItem> {
  var response = await fetch(`${path}api/budget/${budgetId}/income`, {
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

export async function removeIncome(
  budgetId: number,
  incomeId: number
): Promise<void> {
  var response = await fetch(
    `${path}api/budget/${budgetId}/expense/${incomeId}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify({ budgetId, incomeId }),
    }
  );
  if (!response.ok) {
    throw new Error();
  }
}
