package de.workshop.workshop.repository;

import de.workshop.workshop.Register.Session.UserData;
import de.workshop.workshop.posts.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserData, Long> {
    List<UserData> getAllByUsername(String username);

    UserData getById(Long id);
}
