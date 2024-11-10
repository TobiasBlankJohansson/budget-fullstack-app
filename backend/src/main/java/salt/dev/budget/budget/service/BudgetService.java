package salt.dev.budget.budget.service;

import org.springframework.stereotype.Service;
import salt.dev.budget.budget.model.Income;
import salt.dev.budget.budget.repository.BudgetRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BudgetService {
    private final BudgetRepository repo;

    public BudgetService(BudgetRepository repo) {
        this.repo = repo;
    }

    public List<Income> getIncomeList(long budgetId) throws NoSuchElementException {
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        return budget.getIncomes();
        //todo:make good Exception
    }

    public Income addIncome(long budgetId, String name, long sum, String type) {
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        var income = new Income(name,sum,type,budget);
        budget.getIncomes().add(income);
        return income;
    }
}