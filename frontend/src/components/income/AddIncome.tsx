import { useState } from "react";
import { budgetItem } from "../Item";

type inputAddIncome = {
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function AddIncome({ items, setItems }: inputAddIncome) {
  const [item, setItem] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  return (
    <section>
      <h2>Add income</h2>
      <form>
        <label>Item</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={1}
          required
        />
        <button>Add</button>
      </form>
    </section>
  );
}
