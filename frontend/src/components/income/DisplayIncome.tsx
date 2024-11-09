type inputDisplayIncome = {
  income: number;
};

export function DisplayIncome({ income }: inputDisplayIncome) {
  return <h2>Total income: {income}</h2>;
}
