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

  
  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Needs</label>
        <input type="number" id="needs"></input>
        <label>Whants</label>
        <input type="number" id="whants"></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
