import { useState } from "react";
import { cardItems } from "./Budget";

type inportBudgetSetRule = {
  setCardItems: React.Dispatch<React.SetStateAction<cardItems>>;
};

type formData = {
  needs: number;
  whants: number;
};

export function BudgetSetRule({setCardItems }: inportBudgetSetRule) {
  
  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Needs</label>
        <input
          type="number"
        ></input>
        <label>Whants</label>
        <input
          type="number"
        ></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
