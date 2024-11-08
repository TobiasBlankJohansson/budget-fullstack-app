import { bugetItem, Item } from "./item";



export function BugetCard({ id, name, sum, type }: bugetItem) {
  return (<section>
    <h3>{type}</h3>
    <p>Can spend</p>
  </section>)
}
