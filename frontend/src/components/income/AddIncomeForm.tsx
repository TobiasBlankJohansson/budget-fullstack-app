import { useState } from "react";
import { budgetItem } from "../Item";
import { addIncome } from "../../api/income";
import { toast } from "react-toastify";

type inputAddIncome = {
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  budgetId: number;
};

export function AddIncomeForm({ setItems, budgetId }: inputAddIncome) {
  const [item, setItem] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handelSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast.info("Loading...");
    try {
      const newIncome: budgetItem = await addIncome(
        budgetId,
        item,
        Number(amount),
        "Income"
      );
      setItem("");
      setAmount("");
      setItems((prev) => [...prev, newIncome]);
      toast.success("success");
    } catch {
      toast.error("try, again");
    }
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
