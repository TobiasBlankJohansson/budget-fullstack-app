import { budgetItem } from "../components/Item";

const path = import.meta.env.VITE_BUDGET_PATH;

type itemFetch = {
  id: string;
  name: string;
  sum: number;
  type: string;
  budget: object;
};

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
