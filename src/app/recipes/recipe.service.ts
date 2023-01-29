import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'Test Recipe',
          'Simply a Test!',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
        ),
        new Recipe(
          'Test Recipe 2',
          'Simply a Test!',
          'https://www.stylist.co.uk/images/app/uploads/2021/06/08183259/quick-lasagne-recipe-crop-1623173675-1910x1910.png?w=256&h=256&fit=max&auto=format%2Ccompress'
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}