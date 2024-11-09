import { budgetItem } from "../Item";

type inputIncome = {
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
};

export function Income({ items, setItems, setIncome }: inputIncome) {
  return <></>;
}
