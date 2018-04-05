package de.workshop.workshop.posts;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long id;
    private String creatorName;
    private String title;
    private String content;
    private Long relatedTo;
}
