import { useState } from "react";
import { budgetItem } from "../Item";
import { addExpense } from "../../api/expense";
import { Bounce, toast } from "react-toastify";

type inputAddItemForm = {
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
  type: string;
};

export function AddItemForm({ setBudgetItem, type }: inputAddItemForm) {
  const [item, setItem] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handelSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast.info("Loading...");
    try {
      const newIncome: budgetItem = await addExpense(
        2000,
        item,
        Number(amount),
        type
      );
      setItem("");
      setAmount("");
      setBudgetItem((prev) => [...prev, newIncome]);

      toast.success("success");
    } catch {
      toast.error("try, again");
    }
  };

  return (
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
  );
}
