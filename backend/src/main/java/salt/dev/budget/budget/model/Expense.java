package salt.dev.budget.budget.model;

import jakarta.persistence.*;

@Entity
@Table(name = "expense")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private long sum;
    @Column(nullable = false)
    private String type;

    @ManyToOne(optional = false)
    @JoinColumn(name="budget_id")
    private Budget budget;

    public Expense() {
    }

    public Expense(String name, long sum, String type, Budget budget) {
        this.name = name;
        this.sum = sum;
        this.type = type;
        this.budget = budget;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public long getSum() {
        return sum;
    }

    public String getType() {
        return type;
    }

    public Budget getBudget() {
        return budget;
    }
}
