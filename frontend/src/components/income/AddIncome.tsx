import { useState } from "react";
import { budgetItem } from "../Item";

type inputAddIncome = {
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function AddIncome({setItems }: inputAddIncome) {
  const [item, setItem] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handelSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const mockItem: budgetItem = {
      id: "10",
      name: item,
      sum: Number(amount),
      type: "Income",
    };
    //todo:add fetch to place item in data base
    setItem("");
    setAmount("");
    event.currentTarget.reset();
    setItems((prev) => [...prev, mockItem]);
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
