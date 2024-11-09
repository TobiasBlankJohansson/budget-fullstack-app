import { useEffect } from "react";
import { budgetItem } from "../Item";
import { DisplayIncomeList } from "./DisplayIncomeList";

type inputIncome = {
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
};

export function Income({ items, setItems, setIncome }: inputIncome) {


  return (
    <section>
      <DisplayIncomeList items={items} setItems={setItems} totalIncome={100} />
    </section>
  );
}
