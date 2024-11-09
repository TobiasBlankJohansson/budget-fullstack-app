import { budgetItem } from "../Item";

type inportDisplayIncome = {
    items: budgetItem[];
    setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
}

export function DisplayIncome({items,setItems}:inportDisplayIncome) {}
