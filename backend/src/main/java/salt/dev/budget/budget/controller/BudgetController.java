package salt.dev.budget.budget.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/budget/")
public class BudgetController {

    private final String BUDGET_PATH;

    public BudgetController(@Value("${api.budget.path}")String BUDGET_PATH) {
        this.BUDGET_PATH = BUDGET_PATH;
    }


}
