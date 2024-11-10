package salt.dev.budget.budget.repository;

import org.springframework.data.repository.ListCrudRepository;
import salt.dev.budget.budget.model.Budget;
import salt.dev.budget.budget.model.Income;

import java.util.List;

public interface IncomeRepository extends ListCrudRepository<Income,Long> {
    List<Income> findAllByBudget(Budget budget);
    Income findByBudgetAndId(Budget budget, long incomeId);
}
