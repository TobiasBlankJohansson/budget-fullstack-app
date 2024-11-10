import { budgetItem } from "../components/Item";

const path = import.meta.env.BUDGET_PATH;

export async function getIncome(budgetId: number): Promise<budgetItem[]> {
  var response = await fetch(`${path}/${budgetId}`);
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
): Promise<budgetItem[]> {
  var response = await fetch(`${path}/${budgetId}`, {
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
