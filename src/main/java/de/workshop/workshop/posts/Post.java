package de.workshop.workshop.posts;

import de.workshop.workshop.Register.Session.UserData;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long     id;
    private UserData creator;
    private String   title;
    private String   content;
    private UserData relatedTo;
}
