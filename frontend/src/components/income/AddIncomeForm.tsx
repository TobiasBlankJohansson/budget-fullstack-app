import { useState } from "react";
import { addIncome } from "../../api/income";
import { toast } from "react-toastify";
import { budgetItem } from "../../types/budget";

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
    <section className="budget__main__container-income__add-income">
      <h2 className="budget__main__container-income__add-income__h2">
        Add income
      </h2>
      <form
        className="budget__main__container-income__add-income__form"
        onSubmit={handelSubmit}
      >
        <label className="budget__main__container-income__add-income__form__label-item">
          Item
        </label>
        <input
          className="budget__main__container-income__add-income__form__input-item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <label className="budget__main__container-income__add-income__form__label-amount">
          Amount
        </label>
        <input
          className="budget__main__container-income__add-income__form__input-amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={1}
          required
        />
        <button
          className="budget__main__container-income__add-income__form__button"
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
}
