package salt.dev.budget.budget.controller;

import org.springframework.validation.annotation.Validated;

public record RequestIncomeDto(@Validated String name, long sum, String type) {
}
