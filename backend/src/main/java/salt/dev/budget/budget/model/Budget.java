package salt.dev.budget.budget.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name="budget")
public class Budget {
    @Id
    private long id;

    @OneToMany
    private List<Expense> expenses;

    @OneToMany
    private List<Income> incomes;

    public Budget() {
    }

    public Budget(long id, List<Expense> expenses, List<Income> incomes) {
        this.id = id;
        this.expenses = expenses;
        this.incomes = incomes;
    }

    public long getId() {
        return id;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }

    public List<Income> getIncomes() {
        return incomes;
    }
}
