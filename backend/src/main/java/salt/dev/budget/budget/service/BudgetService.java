package salt.dev.budget.budget.service;

import org.springframework.stereotype.Service;
import salt.dev.budget.budget.model.Expense;
import salt.dev.budget.budget.model.Income;
import salt.dev.budget.budget.repository.BudgetRepository;
import salt.dev.budget.budget.repository.ExpenseRepository;
import salt.dev.budget.budget.repository.IncomeRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BudgetService {
    private final BudgetRepository repo;
    private final IncomeRepository incomeRepo;
    private final ExpenseRepository expenseRepo;

    public BudgetService(BudgetRepository repo, IncomeRepository incomeRepo, ExpenseRepository expenseRepo) {
        this.repo = repo;
        this.incomeRepo = incomeRepo;
        this.expenseRepo = expenseRepo;
    }

    public List<Income> getIncomeList(long budgetId) throws NoSuchElementException {
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        return incomeRepo.findAllByBudget(budget);
        //todo:make good Exception
    }

    public Income addIncome(long budgetId, String name, long sum, String type) throws NoSuchElementException{
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        var income = new Income(name,sum,type,budget);
        return incomeRepo.save(income);
    }

    public List<Expense> getExpenseList(long budgetId) throws NoSuchElementException {
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        return expenseRepo.findAllByBudget(budget);
        //todo:make good Exception
    }

    public Expense addExpense(long budgetId, String name, long sum, String type) throws NoSuchElementException{
        var budget = repo.findById(budgetId)
                .orElseThrow(NoSuchElementException::new);
        var expense = new Expense(name,sum,type,budget);
        return expenseRepo.save(expense);
    }
}