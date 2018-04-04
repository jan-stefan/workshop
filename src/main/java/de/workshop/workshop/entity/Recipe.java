package de.workshop.workshop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer prepareTime;
    private String description;
    private String instruction;

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Ingredient> ingredients = new ArrayList<>();
}
