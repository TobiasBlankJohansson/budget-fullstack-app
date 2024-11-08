import { bugetItem, Item } from "./item";

type inputBugetCard = {
  type: string;
  items: bugetItem[];
};

export function BugetCard({ type, items }: inputBugetCard) {
  return (
    <section>
      <header>
        <h3>{type}</h3>
      </header>
      <article>
        <p>Can spend: {}</p>
        <table>
          <tr>
            <td>Item</td>
            <td></td>
          </tr>
          {items.map((item) => Item(item))}
        </table>
        <p>Total spent: {}</p>
      </article>
    </section>
  );
}
