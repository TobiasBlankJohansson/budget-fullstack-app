import { budgetItem, Item } from "../Item";

type inputDisplayIncomeList = {
  totalIncome: number;
  items: budgetItem[];
  setItems: React.Dispatch<React.SetStateAction<budgetItem[]>>;
};

export function DisplayIncomeList({
  items,
  setItems,
  totalIncome,
}: inputDisplayIncomeList) {
  return (
    <section>
      <h2>Income</h2>
      <table>{items.map((item) => Item(item))}</table>
      <p>Total income: {totalIncome}</p>
    </section>
  );
}
