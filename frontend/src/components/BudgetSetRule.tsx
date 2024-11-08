import { useState } from "react";

type inportBudgetSetRule = {
  onSaveClick: (needs: number, whants: number, saves: number) => void;
};

type formData = {
  needs: number;
  whants: number;
};

export function BudgetSetRule({onSaveClick }: inportBudgetSetRule) {
  const [formData, setFormData] = useState<formData>({ needs: 50, whants: 30 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const saves = 100 - formData.needs - formData.whants;
    if (saves < 0) {
      //todo: add if negetive
      return;
    }

    onSaveClick(formData.needs, formData.whants, saves);
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Needs</label>
        <input
          type="number"
          value={formData.needs}
          onChange={handleChange}
        ></input>
        <label>Whants</label>
        <input
          type="number"
          value={formData.whants}
          onChange={handleChange}
        ></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
