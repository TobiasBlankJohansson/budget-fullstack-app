import { useState } from "react";

type inportBudgetSetRule = {
  budget: number;
};

export function BudgetSetRule({ budget }: inportBudgetSetRule) {
  const [needs, setNeeds] = useState<number>(50);
  const [wants, setWants] = useState<number>(30);

  return (
    <>
      <form action="">
        <label>Needs</label>
        <input></input>
        <label>Whants</label>
        <input></input>
        <button onClick={}>Save</button>
      </form>
    </>
  );
}
