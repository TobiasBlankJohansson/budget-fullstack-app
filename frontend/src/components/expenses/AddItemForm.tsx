import { budgetItem } from "../item";

type inputAddItemForm = {
  setBudgetItem: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function AddItemForm({ setBudgetItem }: inputAddItemForm) {
  const handelSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const item: HTMLInputElement = document.getElementById(
      "add-item__item"
    ) as HTMLInputElement;
    const amount: HTMLInputElement = document.getElementById(
      "add-item__add"
    ) as HTMLInputElement;
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>Item</label>
      <input type="text" id="add-item__item" required />
      <label>Amount</label>
      <input type="number" id="add-item__add" min={1} required />
      <button type="submit">Add</button>
    </form>
  );
}
