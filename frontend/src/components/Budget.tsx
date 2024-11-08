import { useState } from "react";
import { BudgetCard } from "./BudgetCard";
import { budgetItem } from "./item";



export function Buget() {
    const [needs, SetNeeds] = useState<budgetItem[]>([]);
    const [wants, setWants] = useState<budgetItem[]>([]);
    const [saves, setSaves] = useState<budgetItem[]>([]);



  return (
    <div>
      <BudgetCard type={"needs"} items={needs} budget={}/>
      <BudgetCard type={"wants"} items={wants} budget={}/>
      <BudgetCard type={"saves"} items={saves} budget={}/>
    </div>
  );
}
