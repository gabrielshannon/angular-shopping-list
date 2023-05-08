import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipieStartComponent } from "./recipie-start/recipie-start.component";
import { RecipieEditComponent } from "./recipie-edit/recipie-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipieStartComponent,
    RecipieEditComponent,
  ],

  imports: [RouterModule, SharedModule, ReactiveFormsModule, RecipesRoutingModule],

})
export class RecipesModule {
}

