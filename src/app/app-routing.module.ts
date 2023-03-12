import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipieEditComponent } from './recipes/recipie-edit/recipie-edit.component';
import { RecipieStartComponent } from './recipes/recipie-start/recipie-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipieStartComponent },
      { path: 'new', component: RecipieEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipieEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
