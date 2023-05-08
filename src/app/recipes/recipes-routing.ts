import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipieStartComponent} from "./recipie-start/recipie-start.component";
import {RecipieEditComponent} from "./recipie-edit/recipie-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipesResolverService} from "./recipes-resolver.service";
import {RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipieStartComponent},
      {path: 'new', component: RecipieEditComponent},
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipieEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RecipesRoutingModule {
}
