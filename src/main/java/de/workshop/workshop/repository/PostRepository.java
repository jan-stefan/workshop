package de.workshop.workshop.repository;

import de.workshop.workshop.posts.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository
        extends CrudRepository <Post, Long> {
    List <Post> getAllByCreatorName(String creatorName);

    Post getById(Long id);
}
