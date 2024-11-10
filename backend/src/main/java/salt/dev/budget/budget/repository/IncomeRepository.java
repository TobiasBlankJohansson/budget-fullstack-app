package salt.dev.budget.budget.repository;

import org.springframework.data.repository.ListCrudRepository;
import salt.dev.budget.budget.model.Budget;
import salt.dev.budget.budget.model.Income;

public interface IncomeRepository extends ListCrudRepository<Income,Long> {
}
