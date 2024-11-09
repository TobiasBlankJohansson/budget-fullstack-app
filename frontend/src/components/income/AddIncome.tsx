import { budgetItem } from "../Item";

type inputAddIncome = {
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function AddIncome({ items, setItems }: inputAddIncome) {
  return <section></section>;
}
