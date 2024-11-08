import { useEffect, useState } from "react";
import { bugetItem, Item } from "./item";

type inputBugetCard = {
  type: string;
  items: bugetItem[];
  bugent: number;
};

export function BugetCard({ type, items, bugent }: inputBugetCard) {
  const [canSpend, setCanSpend] = useState<number>(0);
  const [totalSpend, setTotalSpend] = useState<number>(0);

  useEffect(() => {
    let spent: number = 0;
    items.forEach((item) => (spent += item.sum));

    setCanSpend(() => bugent - spent);
    setTotalSpend(() => spent);
  }, items);

  return (
    <section>
      <header>
        <h3>{type}</h3>
      </header>
      <article>
        <p>Can spend: {canSpend}</p>
        <table>
          <tr>
            <td>Item</td>
            <td></td>
          </tr>
          {items.map((item) => Item(item))}
        </table>
        <p>Total spent: {totalSpend}</p>
      </article>
    </section>
  );
}
