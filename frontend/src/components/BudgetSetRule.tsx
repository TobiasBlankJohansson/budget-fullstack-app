import { useState } from "react";
import { cardItems } from "./Budget";

type inputBudgetSetRule = {
  setCardItems: React.Dispatch<React.SetStateAction<cardItems>>;
};

type formData = {
  needs: number;
  whants: number;
};

export function BudgetSetRule({ setCardItems }: inputBudgetSetRule) {
  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const needs: number = document.getElementById("needs").value;
    const wants: number = document.getElementById("wants").value;
    if (needs == null || wants == null) {
      return;
      //todo:give user response
    }

    const saves: number = 100 - needs - wants;
    if (saves < 0) {
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
        <input type="number" id="whants" required></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
