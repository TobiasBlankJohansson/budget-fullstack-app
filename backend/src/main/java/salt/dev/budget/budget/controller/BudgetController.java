package salt.dev.budget.budget.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salt.dev.budget.budget.model.Income;

import java.util.List;

@RestController
@RequestMapping("/api/budget/")
public class BudgetController {

    private final String BUDGET_PATH;

    public BudgetController(@Value("${api.budget.path}")String BUDGET_PATH) {
        this.BUDGET_PATH = BUDGET_PATH;
    }

    @GetMapping("{id}/income")
    public ResponseEntity<List<Income>> getIncomeList(@PathVariable long id){
        return null;
    }
}
