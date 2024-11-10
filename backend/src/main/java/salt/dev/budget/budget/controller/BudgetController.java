package salt.dev.budget.budget.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.dev.budget.budget.model.Income;
import salt.dev.budget.budget.service.BudgetService;

import java.util.List;

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
}
