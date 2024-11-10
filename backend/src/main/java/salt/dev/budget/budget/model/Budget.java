package salt.dev.budget.budget.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="budget")
public class Budget {
    @Id
    private long id;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Expense> expenses;

    @OneToMany(cascade = CascadeType.REMOVE)
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
