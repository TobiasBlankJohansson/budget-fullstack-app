import { budgetRule } from "./Budget";

type inputBudgetSetRule = {
  setCardItems: React.Dispatch<React.SetStateAction<budgetRule>>;
};

export function BudgetSetRule({ setCardItems }: inputBudgetSetRule) {
  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const needs: number =
      Number((document.getElementById("needs") as HTMLInputElement).value) /
      100;
    const wants: number =
      Number((document.getElementById("wants") as HTMLInputElement).value) /
      100;

    const saves: number = 1 - needs - wants;

    if (saves < 0.0) {
      return;
      //todo:give user response
    }
    event.currentTarget.reset();
    setCardItems(() => ({ needs: needs, wants: wants, saves: saves }));
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Needs</label>
        <input type="number" id="needs" min={0} required></input>
        <label>Whants</label>
        <input type="number" id="wants" min={0} required></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}