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
}
