import { budgetItem } from "../components/Item";

const path = import.meta.env.BUDGET_PATH;

export async function getIncome(id: number): Promise<budgetItem[]> {
  var response = await fetch(`${path}/${id}`);
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}
