export function AddItemForm() {
  return (
    <form onSubmit={() => {}}>
      <label>Item</label>
      <input type="text" id="add-item__item" required />
      <label>Amount</label>
      <input type="number" id="add-item__add" required />
      <button type="submit">Add</button>
    </form>
  );
}
