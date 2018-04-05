package de.workshop.workshop.service;

import com.google.common.collect.Lists;
import de.workshop.workshop.posts.Post;
import de.workshop.workshop.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    PostRepository repository;

    @Autowired
    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List <Post> getAllPosts() {
        return Lists.newArrayList(repository.findAll());
    }

    public List <Post> getAllPostsByUsername(String username) {
        return repository.getAllByCreator(username);
    }

    public void deletePost(Long id) {
        repository.deleteById(id);
    }

    public Post createPost(Post post) {
        return repository.save(post);
    }

    public Post getPostById(Long id) {
        return repository.getById(id);
    }
}