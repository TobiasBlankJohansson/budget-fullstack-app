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
    private List<Expence> expences;

    @OneToMany
    private List<Income> incomes;

}
