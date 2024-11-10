import { useState } from "react";
import { budgetItem } from "../Item";
import { addIncome } from "../../api/income";

type inputAddIncome = {
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function AddIncomeForm({ setItems }: inputAddIncome) {
  const [item, setItem] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handelSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newIncome: budgetItem = await addIncome(
      2000,
      item,
      Number(amount),
      "Income"
    );
    console.log(newIncome);
    //add respons if fail
    setItem("");
    setAmount("");
    setItems((prev) => [...prev, newIncome]);
  };

  return (
    <section>
      <h2>Add income</h2>
      <form onSubmit={handelSubmit}>
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
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
