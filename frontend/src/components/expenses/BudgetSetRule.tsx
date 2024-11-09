import { budgetRule } from "./Budget";

type inputBudgetSetRule = {
  setCardItems: React.Dispatch<React.SetStateAction<budgetRule>>;
};

export function BudgetSetRule({ setCardItems }: inputBudgetSetRule) {
  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const needs: number = document.getElementById("needs").value/100;
    const wants: number = document.getElementById("wants").value/100;

    if (needs == null || wants == null) {
      return;
      //todo:give user response
    }

    const saves: number = 1 - needs - wants;
    if (saves < 0.00) {
      return;
      //todo:give user response
    }
    
    setCardItems(() => ({ needs: needs, wants: wants, saves: saves }));
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Needs</label>
        <input type="number" id="needs" required></input>
        <label>Whants</label>
        <input type="number" id="wants" required></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
