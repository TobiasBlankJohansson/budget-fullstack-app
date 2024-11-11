type inputDisplayIncome = {
  income: number;
};

export function DisplayIncome({ income }: inputDisplayIncome) {
  return <h2 className="budget__main__h2">Total income: {income}</h2>;
}
