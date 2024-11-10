package salt.dev.budget.budget.service;

import org.springframework.stereotype.Service;
import salt.dev.budget.budget.model.Income;
import salt.dev.budget.budget.repository.BudgetRepository;
import salt.dev.budget.budget.repository.IncomeRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BudgetService {
    private final BudgetRepository repo;
    private final IncomeRepository incomeRepo;

    public BudgetService(BudgetRepository repo, IncomeRepository incomeRepo) {
        this.repo = repo;
        this.incomeRepo = incomeRepo;
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
        return incomeRepo.save(income);
    }
}