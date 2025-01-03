import { toast } from "react-toastify";
import { budgetRule } from "../../types/budget";

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
      toast.error("Needs and wants can't be over 100");
      return;
    }
    event.currentTarget.reset();
    setCardItems(() => ({ needs: needs, wants: wants, saves: saves }));
    toast.success("Success");
  };

  return (
    <article className="budget__main__budget-card-container__set-rule">
      <form
        className="budget__main__budget-card-container__set-rule__form"
        onSubmit={handelSubmit}
      >
        <label className="budget__main__budget-card-container__set-rule__form__label-needs">
          Needs:{" "}
          {
            <input
              className="budget__main__budget-card-container__set-rule__form__input-needs"
              type="number"
              id="needs"
              min={0}
              max={100}
              required
            ></input>
          }
        </label>
        <label className="budget__main__budget-card-container__set-rule__form__label-wants">
          Wants:{" "}
          {
            <input
              className="budget__main__budget-card-container__set-rule__form__input-wants"
              type="number"
              id="wants"
              min={0}
              max={100}
              required
            ></input>
          }
        </label>
        <button
          className="budget__main__budget-card-container__set-rule__form__button"
          type="submit"
        >
          Save
        </button>
      </form>
    </article>
  );
}
