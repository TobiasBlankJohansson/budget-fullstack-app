package salt.dev.budget.budget.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import salt.dev.budget.budget.model.Expense;
import salt.dev.budget.budget.model.Income;
import salt.dev.budget.budget.service.BudgetService;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/api/budget/")
public class BudgetController {

    private final String BUDGET_PATH;
    private final BudgetService service;

    public BudgetController(@Value("${api.budget.path}")String BUDGET_PATH, BudgetService service) {
        this.BUDGET_PATH = BUDGET_PATH;
        this.service = service;
    }

    @GetMapping("{id}/income")
    public ResponseEntity<List<Income>> getIncomeList(@PathVariable long id){
        return ResponseEntity.ok(service.getIncomeList(id));
    }

    @PostMapping("{id}/income")
    public ResponseEntity<Income> addIncomeList(
            @PathVariable long id, @RequestBody RequestIncomeDto incomeDto){
        return ResponseEntity.accepted().body(
                service.addIncome(id,incomeDto.name(),incomeDto.sum(),incomeDto.type()));
    }

    @DeleteMapping("{budgetId}/income/{incomeId}")
    public ResponseEntity<Void> removeIncome(@PathVariable long budgetId, @PathVariable long incomeId){
        service.removeIncome(budgetId,incomeId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}/expense")
    public ResponseEntity<List<Expense>> getExpenseList(@PathVariable long id){
        return ResponseEntity.ok(service.getExpenseList(id));
    }

    @PostMapping("{id}/expense")
    public ResponseEntity<Expense> addExpenseList(
            @PathVariable long id, @RequestBody RequestIncomeDto incomeDto){
        return ResponseEntity.accepted().body(
                service.addExpense(id,incomeDto.name(),incomeDto.sum(),incomeDto.type()));
    }

    @DeleteMapping("{budgetId}/expense/{expenseId}")
    public ResponseEntity<Void> removeExpense(@PathVariable long budgetId, @PathVariable long expenseId){
        service.removeExpense(budgetId, expenseId);
        return ResponseEntity.ok().build();
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<?> exceptionHandler(NoSuchElementException e){
        return ResponseEntity.notFound().build();
    }

}
