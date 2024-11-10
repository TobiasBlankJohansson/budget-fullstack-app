package salt.dev.budget.budget.repository;


import org.springframework.data.repository.ListCrudRepository;
import salt.dev.budget.budget.model.Budget;

public interface BudgetRepository extends ListCrudRepository<Budget,Long> {
}
