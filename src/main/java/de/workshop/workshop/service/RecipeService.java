package de.workshop.workshop.service;

import com.google.common.collect.Lists;
import de.workshop.workshop.entity.Recipe;
import de.workshop.workshop.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    RecipeRepository recipeRepository;

    public void storeRecipe(Recipe recipe){
        recipeRepository.save(recipe);
    }

    public List<Recipe> getAllRecipe(){
        return Lists.newArrayList(recipeRepository.findAll());
    }

}
