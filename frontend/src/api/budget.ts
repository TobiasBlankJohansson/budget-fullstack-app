type budgetDto = {
  id: number;
};

const path = import.meta.env.VITE_BUDGET_PATH;

export async function addBudget(budgetId: number): Promise<number> {
  var response = await fetch(`${path}api/budget/${budgetId}`);
  if (!response.ok) {
    throw new Error();
  }
  const budgetDto: budgetDto = await response.json();
  return budgetDto.id;
}
