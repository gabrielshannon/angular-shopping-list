import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];
  constructor(private recepieService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recepieService.getRecipes();
  }
}
