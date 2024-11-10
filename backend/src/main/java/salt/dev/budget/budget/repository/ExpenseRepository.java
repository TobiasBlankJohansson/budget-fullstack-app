package salt.dev.budget.budget.repository;

import org.springframework.data.repository.ListCrudRepository;
import salt.dev.budget.budget.model.Budget;
import salt.dev.budget.budget.model.Expense;
import salt.dev.budget.budget.model.Income;

import java.util.List;

public interface ExpenseRepository extends ListCrudRepository<Expense,Long> {
    List<Expense> findAllByBudget(Budget budget);
    Expense findByBudgetAndId(Budget budget, long expenseId);
}
