package de.workshop.workshop.controller;


import de.workshop.workshop.entity.Ingredient;
import de.workshop.workshop.entity.Recipe;
import de.workshop.workshop.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class RecipeController {

    @Autowired
    RecipeService recipeService;


//    @RequestMapping(path = "test",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
//    public String test(){
//        ArrayList<Ingredient> ingredientList = new ArrayList<>();
//        Ingredient ingredient = new Ingredient(1L,12,"birnen");
//
//        ingredientList.add(ingredient);
//        Recipe recipe = new Recipe(1L,"toast",15,"sososo","",ingredientList);
//
//        recipeService.storeRecipe(recipe);
//
//        return "test";
//    }

    @RequestMapping(
            path = "recipes",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Recipe> getAllRecipes(){
        return recipeService.getAllRecipe();
    }


    @RequestMapping(
            path = "recipe",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String storeRecipe(Recipe recipe){
        recipeService.storeRecipe(recipe);

        return "done";
    }
}
