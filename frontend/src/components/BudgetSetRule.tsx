import { useState } from "react";

type inportBudgetSetRule = {
  onSaveClick: (needs: number, whants: number, saves: number) => void;
};

type formData = {
  needs: number;
  whants: number;
};

export function BudgetSetRule({onSaveClick }: inportBudgetSetRule) {
  
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
