package de.workshop.workshop.controller;

import de.workshop.workshop.posts.Post;
import de.workshop.workshop.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @RequestMapping(path = "post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createPost(@RequestBody Post post) {
        postService.createPost(post);
    }

    @RequestMapping(path = "post/{id}", method = RequestMethod.DELETE)
    public void deletePost(@PathVariable("id") Long id) {
        postService.deletePost(id);
    }

    @RequestMapping(path = "post/{id}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public Post getPostById(@PathVariable("id") Long id){
       return postService.getPostById(id);
    }

    @RequestMapping(path = "posts",method = RequestMethod.GET)
    public List<Post> getAllPosts(@RequestParam(value = "username",defaultValue = "") String userName) {
        if (!userName.equals("")){
            return postService.getAllPostsByUsername(userName);
        }else {
            return postService.getAllPosts();
        }
    }
}
